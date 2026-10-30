import Hero from "./components/Hero";
import SiteCheck from "./components/SiteCheck";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import WhyChooseMe from "./components/WhyChooseMe";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import ClosingCta from "./components/ClosingCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Hero />
      <SiteCheck />
      <About />
      <Services />
      <Process />
      <Pricing />
      <Portfolio />
      <WhyChooseMe />
      <Faq />
      <Contact />
      <ClosingCta />
      <Footer />
    </div>
  );
}
