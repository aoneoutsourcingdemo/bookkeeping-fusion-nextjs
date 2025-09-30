import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Testimonials />
        {/* <Pricing /> */}
      {/* <Features /> */}
      <Faq />
      <Statistics />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
