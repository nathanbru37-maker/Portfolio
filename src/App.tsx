import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Footer } from "./components/Footer";
import Stages from "./pages/Stages";
import Contact from "./pages/Contact";

function Home() {
  return (
    <>
      <Hero />
      <Skills />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stages" element={<Stages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
