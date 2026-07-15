import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PartnerStrip from "@/components/PartnerStrip";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import ContentShowcase from "@/components/ContentShowcase";
import PhoneReveal from "@/components/PhoneReveal";
import Metrics from "@/components/Metrics";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
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
        <Metrics />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
