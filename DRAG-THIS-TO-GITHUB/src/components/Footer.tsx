import { site } from "@/content/site";

export function Footer() {
  const { location, contact } = site;
  const fullAddress = `${location.street}, ${location.neighborhood}, ${location.city} ${location.zip}`;

  return (
    <footer id="location" className="border-t border-amber-900/30 bg-[#0f0a08] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.35em] text-amber-400/80 uppercase">Find Us</p>
            <h2 className="mt-3 font-serif text-3xl text-amber-50">Our location</h2>
            <address className="mt-6 not-italic leading-relaxed text-stone-300">
              <p className="text-lg text-amber-100">{location.street}</p>
              <p>{location.neighborhood}, {location.city} {location.zip}</p>
              <p>{location.country}</p>
            </address>
            <p className="mt-4 text-sm text-stone-500">{location.parking}</p>
            <p className="mt-2 text-sm text-stone-500">{location.transit}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-amber-900/40">
            <iframe title="The Velvet Room location map" src={`https://maps.google.com/maps?q=${location.mapsQuery}&output=embed`} className="h-72 w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-amber-900/25 pt-8 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.name} · {fullAddress}</p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${contact.phone}`} className="hover:text-amber-200">{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="hover:text-amber-200">{contact.email}</a>
            <span>{contact.instagram}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
