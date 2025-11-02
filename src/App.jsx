import LandingPage from "./components/Hero";
import Navbar from "./components/Navbar";
import AlternatingProjectsPinned from "./components/AlternatingProjectsPinned";
import SkillsAndTools from "./components/Skills";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/ContactUs";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <About />

      <SkillsAndTools />
      <AlternatingProjectsPinned />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
