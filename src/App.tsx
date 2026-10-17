import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChooseMe from "./components/WhyChooseMe";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <WhyChooseMe />
      <Contact />
      <Footer />
    </div>
  );
}
