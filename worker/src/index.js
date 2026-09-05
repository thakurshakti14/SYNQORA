/**
 * Cloudflare Worker: proxies demo-request form submissions to a Google
 * Apps Script Web App, which appends each one as a row in a Google Sheet.
 *
 * Required binding (set in wrangler.toml or `wrangler secret put`):
 *   GOOGLE_SCRIPT_URL - the Apps Script Web App /exec URL
 *
 * Required var (set in wrangler.toml):
 *   ALLOWED_ORIGIN - the site origin allowed to call this worker (CORS)
 */

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body) {
  if (!body || typeof body !== "object") return "Invalid payload.";
  const { name, email, company } = body;
  if (!name || typeof name !== "string" || !name.trim()) return "Name is required.";
  if (!email || typeof email !== "string" || !EMAIL_RE.test(email)) return "Valid email is required.";
  if (!company || typeof company !== "string" || !company.trim()) return "Company is required.";
  return null;
}

export default {
  async fetch(request, env) {
    const origin = env.ALLOWED_ORIGIN || "*";

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(origin) });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/api/demo-requests" || request.method !== "POST") {
      return json({ error: "Not found" }, 404, origin);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON body." }, 400, origin);
    }

    const validationError = validate(body);
    if (validationError) {
      return json({ error: validationError }, 400, origin);
    }

    if (!env.GOOGLE_SCRIPT_URL) {
      return json({ error: "Server misconfigured: missing GOOGLE_SCRIPT_URL." }, 500, origin);
    }

    const entry = {
      name: body.name.trim(),
      email: body.email.trim(),
      company: body.company.trim(),
      role: body.role || "",
      team_size: body.team_size || "",
      message: body.message || "",
      submitted_at: new Date().toISOString(),
    };

    try {
      const sheetResponse = await fetch(env.GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(entry),
      });

      if (!sheetResponse.ok) {
        return json({ error: "Failed to save entry." }, 502, origin);
      }
    } catch {
      return json({ error: "Failed to reach storage backend." }, 502, origin);
    }

    return json({ ok: true, ...entry }, 201, origin);
  },
};
