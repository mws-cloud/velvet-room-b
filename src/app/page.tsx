import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PoliciesHours } from "@/components/PoliciesHours";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-[#120d0a]">
        <Hero />
        <PoliciesHours />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
