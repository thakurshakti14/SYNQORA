import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, CalendarCheck } from "lucide-react";
import { useDemo } from "@/context/DemoContext";
import DashboardMockup from "@/components/site/DashboardMockup";

export default function TourModal() {
  const { tourOpen, closeTour, openDemo } = useDemo();

  const handleClose = (open) => {
    if (!open) closeTour();
  };

  return (
    <Dialog open={tourOpen} onOpenChange={handleClose}>
      <DialogContent
        data-testid="tour-modal"
        className="max-h-[92vh] overflow-y-auto border-white/10 bg-[#0d131c] text-white sm:max-w-[820px]"
      >
        <DialogHeader>
          <div className="mb-1 flex items-center gap-2 text-[#9F8BFF]">
            <Play className="h-4 w-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">
              Product tour
            </span>
          </div>
          <DialogTitle className="font-heading text-2xl font-semibold text-white">
            The leadership view, in 90 seconds
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            A guided preview of Synqora&apos;s executive command center.
          </DialogDescription>
        </DialogHeader>

        <div className="relative mt-2 overflow-hidden rounded-xl">
          <div className="pointer-events-none absolute inset-0 sq-radial-glow" />
          <DashboardMockup compact />
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="grid h-16 w-16 place-items-center rounded-full border border-white/20 bg-[#6D5EF5]/80 backdrop-blur-sm sq-pulse-dot">
              <Play className="h-6 w-6 translate-x-0.5 fill-white text-white" />
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-400">
            Prefer a live walkthrough with our team?
          </p>
          <Button
            data-testid="tour-book-demo-button"
            onClick={() => {
              closeTour();
              setTimeout(openDemo, 200);
            }}
            className="bg-[#6D5EF5] text-white hover:bg-[#594CE0]"
          >
            <CalendarCheck className="mr-2 h-4 w-4" /> Book a demo
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
