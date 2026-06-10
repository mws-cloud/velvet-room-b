import { site } from "@/content/site";
import { StarRating } from "@/components/StarRating";

export function Reviews() {
  return (
    <section className="border-y border-amber-900/25 bg-[#1a120d] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-xs tracking-[0.35em] text-amber-400/80 uppercase">Guest Notes</p>
          <h2 className="mt-3 font-serif text-3xl text-amber-50 sm:text-4xl">What people are saying</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {site.reviews.map((review) => (
            <article key={review.name} className="rounded-2xl border border-amber-900/40 bg-[#22160f]/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <StarRating rating={review.rating} />
              <p className="mt-4 text-sm leading-relaxed text-stone-300">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-6 border-t border-amber-900/30 pt-4">
                <p className="font-medium text-amber-100">{review.name}</p>
                <p className="text-xs text-stone-500">{review.location} · {review.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
