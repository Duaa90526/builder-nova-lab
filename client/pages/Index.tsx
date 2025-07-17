import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FormSection } from "@/components/FormSection";
import { OutputSection } from "@/components/OutputSection";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FormSection />
      <OutputSection />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}
