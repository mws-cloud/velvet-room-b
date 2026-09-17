import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <Image src={site.heroImage} alt="Dimly lit cocktail lounge with amber lighting" fill priority className="hero-image object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#120d0a]/55 via-[#120d0a]/35 to-[#120d0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#120d0a_78%)]" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
        <p className="mb-4 text-xs tracking-[0.35em] text-amber-300/80 uppercase">Cocktail Lounge · Tel Aviv</p>
        <h1 className="font-serif text-5xl tracking-[0.18em] text-amber-50 uppercase sm:text-7xl">{site.name}</h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">{site.tagline}</p>
        <Link href="/reservations" className="mt-10 rounded-full border border-green-500/70 bg-green-700/80 px-10 py-4 text-sm font-medium tracking-[0.25em] text-green-50 uppercase shadow-[0_0_40px_rgba(34,197,94,0.35)] transition hover:scale-[1.02] hover:bg-green-600/90">
          Reservation
        </Link>
      </div>
    </section>
  );
}