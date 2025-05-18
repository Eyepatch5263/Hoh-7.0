import About from "@/components/About";
import ContactForm from "@/components/Contact";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PrizePoolSection from "@/components/PrizePool";
import TestimonialsEventsSection from "@/components/Voices";


export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <About/>
      <PrizePoolSection/>
      <TestimonialsEventsSection/>
      <FAQ/>
      <ContactForm />
      <Footer />
    </div>
  );
}
