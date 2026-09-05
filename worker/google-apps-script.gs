/**
 * Google Apps Script Web App that appends demo-request entries as rows
 * in a Google Sheet.
 *
 * Setup:
 * 1. Create a Google Sheet. Add header row in the first sheet:
 *      Submitted At | Name | Email | Company | Role | Team Size | Message
 * 2. Extensions > Apps Script, paste this file's contents there.
 * 3. Deploy > New deployment > type "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 4. Copy the deployment URL (ends in /exec) and set it as the
 *    GOOGLE_SCRIPT_URL secret on the Cloudflare Worker:
 *      wrangler secret put GOOGLE_SCRIPT_URL
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submitted_at || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.company || "",
    data.role || "",
    data.team_size || "",
    data.message || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
