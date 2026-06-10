import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReservationForm } from "@/components/ReservationForm";
import { site } from "@/content/site";

export default function ReservationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#120d0a] px-6 pt-28 pb-20">
        <div className="mx-auto max-w-2xl">
          <Link href="/" className="text-sm text-amber-400/80 transition hover:text-amber-200">← Back to {site.name}</Link>
          <p className="mt-6 text-xs tracking-[0.35em] text-amber-400/80 uppercase">Book a table</p>
          <h1 className="mt-3 font-serif text-4xl text-amber-50 sm:text-5xl">Reservations</h1>
          <p className="mt-4 text-stone-400">Choose your date, hour, and number of seats. We hold tables for 15 minutes from your booked time.</p>
          <div className="mt-10">
            <ReservationForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
