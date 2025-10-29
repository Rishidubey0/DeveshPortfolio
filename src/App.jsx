import LandingPage from "./components/Hero";
import Navbar from "./components/Navbar";
import AlternatingProjectsPinned from "./components/AlternatingProjectsPinned";
import SkillsAndTools from "./components/Skills";

export default function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <SkillsAndTools />
      <AlternatingProjectsPinned />
    </>
  );
}
