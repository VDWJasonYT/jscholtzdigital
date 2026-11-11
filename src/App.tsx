import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import WhyChooseMe from "./components/WhyChooseMe";
import SiteCheck from "./components/SiteCheck";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import ClosingCta from "./components/ClosingCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <main>
      <Hero />
      <Pricing />
      <Portfolio />
      <Services />
      <Process />
      <WhyChooseMe />
      <SiteCheck />
      <Faq />
      <Contact />
      <ClosingCta />
      </main>
      <Footer />
    </div>
  );
}
