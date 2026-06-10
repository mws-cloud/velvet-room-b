import { site } from "@/content/site";

export function PoliciesHours() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div id="hours">
          <p className="text-xs tracking-[0.35em] text-amber-400/80 uppercase">Opening Hours</p>
          <h2 className="mt-3 font-serif text-3xl text-amber-50">When we&apos;re open</h2>
          <ul className="mt-8 space-y-4">
            {site.hours.map((entry) => (
              <li key={entry.day} className="flex items-center justify-between border-b border-amber-900/25 pb-4 text-stone-300">
                <span>{entry.day}</span>
                <span className="text-amber-100">{entry.time}</span>
              </li>
            ))}
          </ul>
        </div>
        <div id="policies">
          <p className="text-xs tracking-[0.35em] text-amber-400/80 uppercase">House Policies</p>
          <h2 className="mt-3 font-serif text-3xl text-amber-50">Before you visit</h2>
          <div className="mt-8 space-y-5">
            {site.policies.map((policy) => (
              <div key={policy.title} className="rounded-xl border border-amber-900/30 bg-[#1a120d]/70 p-5">
                <h3 className="font-medium text-amber-100">{policy.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-400">{policy.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
