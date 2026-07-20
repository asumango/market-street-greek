import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerStrip from "@/components/PartnerStrip";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContentShowcase from "@/components/ContentShowcase";
import PhoneReveal from "@/components/PhoneReveal";
import CaseStudy from "@/components/CaseStudy";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <PartnerStrip />
        <Services />
        <Gallery />
        <ContentShowcase />
        <PhoneReveal />
        <CaseStudy />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
