"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";

type FormState = {
  name: string;
  phone: string;
  email: string;
  date: string;
  hour: string;
  guests: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  date: "",
  hour: "",
  guests: "2",
};

export function ReservationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-amber-700/40 bg-[#1a120d]/90 p-8 text-center">
        <p className="text-xs tracking-[0.35em] text-amber-400 uppercase">Request received</p>
        <h2 className="mt-3 font-serif text-3xl text-amber-50">Your table is reserved</h2>
        <p className="mt-4 text-stone-400">
          {form.name}, we&apos;ve noted your request for{" "}
          <span className="text-amber-100">{form.guests} guests on {form.date} at {form.hour}</span>.
          A confirmation will be sent to {form.email || form.phone}.
        </p>
        <p className="mt-6 text-sm text-amber-300/80">Please arrive on time — late arrivals may receive a less welcoming welcome.</p>
        <Link href="/" className="mt-8 inline-block rounded-full border border-green-600/60 px-6 py-3 text-sm tracking-wide text-green-100 transition hover:border-green-400">Back to home</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-amber-900/40 bg-[#1a120d]/90 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
      <div className="rounded-xl border border-amber-800/50 bg-amber-950/40 p-4 text-sm leading-relaxed text-amber-100/90">
        <strong className="text-amber-200">Please note:</strong> arriving late may result in an unwelcoming welcome. Tables are released after a 15-minute grace period, and late guests may be seated at the bar or asked to wait.
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-stone-400">Full name
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-2 w-full rounded-lg border border-amber-900/50 bg-[#120d0a] px-4 py-3 text-amber-50 outline-none transition focus:border-amber-500" placeholder="Your name" />
        </label>
        <label className="block text-sm text-stone-400">Phone
          <input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-2 w-full rounded-lg border border-amber-900/50 bg-[#120d0a] px-4 py-3 text-amber-50 outline-none transition focus:border-amber-500" placeholder="+972 50 000 0000" />
        </label>
        <label className="block text-sm text-stone-400 sm:col-span-2">Email
          <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="mt-2 w-full rounded-lg border border-amber-900/50 bg-[#120d0a] px-4 py-3 text-amber-50 outline-none transition focus:border-amber-500" placeholder="you@email.com" />
        </label>
        <label className="block text-sm text-stone-400">Date
          <input required type="date" min={minDate} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="mt-2 w-full rounded-lg border border-amber-900/50 bg-[#120d0a] px-4 py-3 text-amber-50 outline-none transition focus:border-amber-500" />
        </label>
        <label className="block text-sm text-stone-400">Hour
          <select required value={form.hour} onChange={(e) => setForm({ ...form, hour: e.target.value })} className="mt-2 w-full rounded-lg border border-amber-900/50 bg-[#120d0a] px-4 py-3 text-amber-50 outline-none transition focus:border-amber-500">
            <option value="" disabled>Select an hour</option>
            {site.reservationSlots.map((slot) => (<option key={slot} value={slot}>{slot}</option>))}
          </select>
        </label>
        <label className="block text-sm text-stone-400 sm:col-span-2">Number of seats
          <select required value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="mt-2 w-full rounded-lg border border-amber-900/50 bg-[#120d0a] px-4 py-3 text-amber-50 outline-none transition focus:border-amber-500">
            {Array.from({ length: site.maxGuests }, (_, i) => i + 1).map((count) => (
              <option key={count} value={count}>{count} {count === 1 ? "seat" : "seats"}</option>
            ))}
          </select>
        </label>
      </div>
      <button type="submit" className="mt-8 w-full rounded-full bg-green-700 px-8 py-4 text-sm font-medium tracking-[0.2em] text-green-50 uppercase transition hover:bg-green-600">Book seats</button>
    </form>
  );
}