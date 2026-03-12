import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VolunteerForm from "./components/VolunteerForm";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import DonateNow from "./pages/DonateNow";
import Volunteer from "./pages/Volunteer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20"> {/* Add padding to avoid Navbar overlap */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/donate" element={<DonateNow />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
