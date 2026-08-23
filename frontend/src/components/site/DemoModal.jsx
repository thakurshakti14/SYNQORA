import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { CheckCircle2, Loader2, CalendarCheck } from "lucide-react";
import { useDemo } from "@/context/DemoContext";
import { submitDemoRequest } from "@/lib/api";

const ROLES = [
  "CEO / Founder",
  "COO",
  "Managing Director",
  "Operations Head",
  "Business Unit Head",
  "Other",
];
const SIZES = ["50–100", "100–250", "250–500", "500–1000", "1000+"];

const EMPTY = { name: "", email: "", company: "", role: "", team_size: "", message: "" };

export default function DemoModal() {
  const { demoOpen, closeDemo } = useDemo();
  const [form, setForm] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) =>
    setForm((f) => ({ ...f, [k]: e?.target ? e.target.value : e }));

  const handleClose = (open) => {
    if (open) return;
    closeDemo();
    setTimeout(() => {
      setForm(EMPTY);
      setDone(false);
    }, 250);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      toast.error("Please fill in name, email and company.");
      return;
    }
    setSubmitting(true);
    try {
      await submitDemoRequest({
        name: form.name,
        email: form.email,
        company: form.company,
        role: form.role || null,
        team_size: form.team_size || null,
        message: form.message || null,
      });
      setDone(true);
      toast.success("Demo request received. Our team will reach out shortly.");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={demoOpen} onOpenChange={handleClose}>
      <DialogContent
        data-testid="demo-modal"
        className="max-h-[92vh] overflow-y-auto border-white/10 bg-[#0d131c] text-white sm:max-w-[560px]"
      >
        {done ? (
          <div className="py-8 text-center" data-testid="demo-success">
            <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-2xl bg-[#2ECC71]/15">
              <CheckCircle2 className="h-8 w-8 text-[#2ECC71]" />
            </div>
            <h3 className="font-heading text-2xl font-semibold">You&apos;re on the list</h3>
            <p className="mx-auto mt-2 max-w-sm text-sm text-gray-400">
              Thanks, {form.name.split(" ")[0] || "there"}. A Synqora specialist will
              contact you within one business day to schedule your leadership walkthrough.
            </p>
            <Button
              data-testid="demo-success-close"
              onClick={() => handleClose(false)}
              className="mt-6 bg-[#6D5EF5] text-white hover:bg-[#594CE0]"
            >
              Back to site
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="mb-1 flex items-center gap-2 text-[#9F8BFF]">
                <CalendarCheck className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Book a demo
                </span>
              </div>
              <DialogTitle className="font-heading text-2xl font-semibold text-white">
                See Synqora in action
              </DialogTitle>
              <DialogDescription className="text-gray-400">
                A 30-minute executive walkthrough tailored to your business. No slides,
                just your leadership dashboard.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={submit} className="mt-2 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="d-name" className="text-gray-300">Full name *</Label>
                  <Input
                    id="d-name"
                    data-testid="demo-name-input"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jordan Ellis"
                    className="border-white/10 bg-[#131A24] text-white placeholder:text-gray-500 focus-visible:ring-[#6D5EF5]"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="d-email" className="text-gray-300">Work email *</Label>
                  <Input
                    id="d-email"
                    data-testid="demo-email-input"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="jordan@company.com"
                    className="border-white/10 bg-[#131A24] text-white placeholder:text-gray-500 focus-visible:ring-[#6D5EF5]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="d-company" className="text-gray-300">Company *</Label>
                <Input
                  id="d-company"
                  data-testid="demo-company-input"
                  value={form.company}
                  onChange={set("company")}
                  placeholder="Meridian Consulting"
                  className="border-white/10 bg-[#131A24] text-white placeholder:text-gray-500 focus-visible:ring-[#6D5EF5]"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label className="text-gray-300">Your role</Label>
                  <Select value={form.role} onValueChange={set("role")}>
                    <SelectTrigger
                      data-testid="demo-role-select"
                      className="border-white/10 bg-[#131A24] text-white focus:ring-[#6D5EF5] data-[placeholder]:text-gray-500"
                    >
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent className="border-white/10 bg-[#131A24] text-white">
                      {ROLES.map((r) => (
                        <SelectItem key={r} value={r} className="focus:bg-[#6D5EF5]/20">
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-gray-300">Team size</Label>
                  <Select value={form.team_size} onValueChange={set("team_size")}>
                    <SelectTrigger
                      data-testid="demo-teamsize-select"
                      className="border-white/10 bg-[#131A24] text-white focus:ring-[#6D5EF5] data-[placeholder]:text-gray-500"
                    >
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent className="border-white/10 bg-[#131A24] text-white">
                      {SIZES.map((s) => (
                        <SelectItem key={s} value={s} className="focus:bg-[#6D5EF5]/20">
                          {s} employees
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="d-message" className="text-gray-300">
                  What would you like to see?
                </Label>
                <Textarea
                  id="d-message"
                  data-testid="demo-message-input"
                  value={form.message}
                  onChange={set("message")}
                  placeholder="We want visibility across sales and delivery for 6 business units..."
                  className="min-h-[90px] border-white/10 bg-[#131A24] text-white placeholder:text-gray-500 focus-visible:ring-[#6D5EF5]"
                />
              </div>

              <Button
                data-testid="demo-submit-button"
                type="submit"
                disabled={submitting}
                className="w-full bg-[#6D5EF5] py-6 text-base font-medium text-white hover:bg-[#594CE0]"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  "Request my demo"
                )}
              </Button>
              <p className="text-center text-xs text-gray-500">
                No spam. Your information stays confidential.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
