import { ShieldCheck, Users, Zap, DollarSign } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "Licensed & insured" },
  { icon: Users, label: "Family + woman-owned" },
  { icon: Zap, label: "Same-day service" },
  { icon: DollarSign, label: "Free upfront quotes" },
];

export function TrustBar() {
  return (
    <section aria-label="Why choose J&F Haul" className="bg-brand-800 text-white">
      <div className="container-x py-5 md:py-6">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="h-9 w-9 rounded-full bg-white/10 grid place-items-center text-accent-300 shrink-0">
                <Icon size={18} strokeWidth={2.25} aria-hidden="true" />
              </span>
              <span className="text-sm md:text-base font-semibold tracking-tight">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
