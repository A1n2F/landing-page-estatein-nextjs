import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Properties } from "@/components/Properties";
import { Questions } from "@/components/Questions";
import { Reviews } from "@/components/Reviews";
import { SubHero } from "@/components/SubHero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SubHero />
      <Properties />
      <Reviews />
      <Questions />
      <Footer />
    </>
  )
}
