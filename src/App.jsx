import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Contact from "./pages/Contact";
import DonateNow from "./pages/DonateNow";
import Volunteer from "./pages/Volunteer";

import AdminVolunteers from "./pages/AdminVolunteers";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./pages/ProtectedRoute";


// =====================================================
// APP CONTENT
// =====================================================

function AppContent() {
  const location = useLocation();

  // Check if current page is an admin page
  const isAdminPage = location.pathname.startsWith("/admin");

  return (
    <>
      {/* =========================================
          PUBLIC NAVBAR
          ========================================= */}

      {!isAdminPage && <Navbar />}


      {/* =========================================
          MAIN CONTENT
          ========================================= */}

      <main className={isAdminPage ? "" : "pt-20"}>

        <Routes>

          {/* =====================================
              PUBLIC ROUTES
              ===================================== */}

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/programs/education"
            element={<Programs />}
          />

          <Route
            path="/programs/healthcare"
            element={<Programs />}
          />

          <Route
            path="/programs/skill-development"
            element={<Programs />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/donate"
            element={<DonateNow />}
          />

          <Route
            path="/volunteer"
            element={<Volunteer />}
          />


          {/* =====================================
              ADMIN ROUTES
              ===================================== */}

          <Route
            path="/admin"
            element={<AdminLogin />}
          />

          <Route
            path="/admin/dashboard"
           element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>}
          />

          <Route
            path="/admin/volunteers"
           element={
    <ProtectedRoute>
      <AdminVolunteers />
    </ProtectedRoute>}
          />

        </Routes>

      </main>


      {/* =========================================
          PUBLIC FOOTER
          ========================================= */}

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