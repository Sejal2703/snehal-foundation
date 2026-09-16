import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import DonateNow from "./pages/DonateNow";
import Volunteer from "./pages/Volunteer";
import OurTeam from "./pages/OurTeam";
import Education from "./pages/Education";
import Healthcare from "./pages/Healthcare";
import SkillDevelopment from "./pages/SkillDevelopment";

import AdminVolunteers from "./pages/AdminVolunteers";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import AdminMessages from "./pages/AdminMessages";

// =====================================================
// APP CONTENT
// =====================================================

function AppContent() {
  const location = useLocation();

  // Check if current page is an admin page
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {/* Automatically scroll to top whenever the route changes */}
      <ScrollToTop />

      {/* =================================================
          PUBLIC NAVBAR
      ================================================= */}
      {!isAdminPage && <Navbar />}

      {/* =================================================
          MAIN CONTENT
      ================================================= */}
      <main className={isAdminPage ? "" : "pt-0 overflow-x-hidden"}>
        <Routes>

          {/* =================================================
              PUBLIC ROUTES
          ================================================= */}

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          {/* Main Programs Page */}
          <Route path="/programs" element={<Programs />} />

          {/* Individual Program Pages */}
          <Route
            path="/programs/education"
            element={<Education />}
          />

          <Route
            path="/programs/healthcare"
            element={<Healthcare />}
          />

          <Route
            path="/programs/skill-development"
            element={<SkillDevelopment />}
          />

          <Route path="/contact" element={<Contact />} />

          <Route path="/donate" element={<DonateNow />} />

          <Route path="/volunteer" element={<Volunteer />} />

          {/* Our Team */}
          <Route path="/our-team" element={<OurTeam />} />

          {/* =================================================
              ADMIN ROUTES
          ================================================= */}

          <Route
            path="/admin"
            element={
              <Navigate
                to="/admin/login"
                replace
              />
            }
          />

          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/volunteers"
            element={
              <ProtectedRoute>
                <AdminVolunteers />
              </ProtectedRoute>
            }
          />

          <Route
  path="/admin/messages"
  element={
    <ProtectedRoute>
      <AdminMessages />
    </ProtectedRoute>
  }
/>

        </Routes>
      </main>

      {/* =================================================
          PUBLIC FOOTER
      ================================================= */}
      {!isAdminPage && <Footer />}
    </>
  );
}

// =====================================================
// APP
// =====================================================

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}