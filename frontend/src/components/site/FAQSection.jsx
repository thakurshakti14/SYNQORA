import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, SectionLabel } from "@/components/site/primitives";

const FAQS = [
  {
    q: "What is Synqora?",
    a: "Instead of juggling spreadsheets, CRMs, project tools, and endless status meetings, Synqora brings everything together in one place. It gives business leaders a real-time view of sales, delivery, team performance, and business health so they can spend less time chasing updates and more time making decisions.",
  },
  {
    q: "Who is Synqora built for?",
    a: "Synqora is built for growing businesses that have outgrown spreadsheets, disconnected tools, and manual reporting. It gives leaders one place to monitor operations, align teams, and make faster decisions with complete visibility.",
  },
  {
    q: "How is Synqora different from a CRM or BI dashboard?",
    a: "A CRM helps you manage customers. A BI dashboard helps you analyze data. Synqora helps you run your business. It connects sales, delivery, projects, teams, and leadership into one platform, giving you complete visibility into what's happening, where attention is needed, and how your business is performing all in real time."
  },
  {
    q: "Do we need to replace our current way of working?",
    a: "No. Synqora is designed to simplify the way your business operates not disrupt it. Our team works with you to configure the platform around your processes, making adoption smooth while giving your teams and leadership a shared view of the business.",
  },
  {
    q: "How does pricing and implementation work?",
    a: "The Founding Pilot Program is exclusively available to the first 3–4 consulting and research firms. It includes a one-time Implementation & Onboarding fee of $2,000–$3,000, depending on your workflow complexity and configuration requirements. After implementation, the platform subscription is $5 per active user per month. An active user is a team member who actively accesses or uses Synqora during the monthly billing period. Once the limited Founding Pilot spots are filled, this introductory pricing will no longer be available.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="border-t border-white/[0.06] py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <div className="text-center">
          <Reveal>
            <SectionLabel>FAQ</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-heading text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              Questions leadership asks first.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-white/[0.08]"
              >
                <AccordionTrigger className="py-5 text-left font-heading text-base font-medium text-white hover:text-[#9F8BFF] hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-gray-400">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
