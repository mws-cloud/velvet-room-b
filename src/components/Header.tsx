import Link from "next/link";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-amber-900/30 bg-[#120d0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-xl tracking-[0.2em] text-amber-100 uppercase transition hover:text-amber-300">
          {site.name}
        </Link>
        <nav className="flex items-center gap-6 text-sm tracking-wide text-stone-300">
          <Link href="/#hours" className="transition hover:text-amber-200">Hours</Link>
          <Link href="/#policies" className="transition hover:text-amber-200">Policies</Link>
          <Link href="/reservations" className="rounded-full border border-amber-600/60 bg-amber-950/60 px-4 py-2 text-amber-100 transition hover:border-amber-400 hover:bg-amber-900/60">
            Reserve
          </Link>
        </nav>
      </div>
    </header>
  );
}
