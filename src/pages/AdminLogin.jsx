import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  Loader2,
} from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ================= LOGIN =================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email address and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:5000"}/api/admin/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Invalid email or password."
        );
      }

      // Save authentication token
      localStorage.setItem("adminToken", data.token);

      // Redirect to admin dashboard
      navigate("/admin/dashboard", { replace: true });
    } catch (err) {
      console.error("Admin login error:", err);

      setError(
        err.message ||
          "Unable to connect to the server. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 flex items-center justify-center px-4 py-10">

      {/* =====================================================
          BACKGROUND EFFECTS
      ===================================================== */}

      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-blue-800/20 blur-3xl" />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.08),transparent_55%)]" />


      {/* =====================================================
          LOGIN CONTAINER
      ===================================================== */}

      <div className="relative z-10 w-full max-w-md">


        {/* =====================================================
            BRAND
        ===================================================== */}

        <div className="mb-7 text-center">

          {/* Logo / Icon */}

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 shadow-xl shadow-blue-950/40">

            <ShieldCheck
              size={32}
              strokeWidth={1.8}
              className="text-white"
            />

          </div>


          {/* Foundation Name */}

          <h1 className="mt-5 text-2xl font-bold tracking-tight text-white">
            Snehal Foundation
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Administration Portal
          </p>

        </div>


        {/* =====================================================
            LOGIN CARD
        ===================================================== */}

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white shadow-2xl shadow-black/30">


          {/* =================================================
              CARD HEADER
          ================================================= */}

          <div className="bg-slate-900 px-7 py-7 sm:px-9">

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-400">
              Secure Access
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Admin Login
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-400">
              Sign in to manage volunteers and access
              administration features.
            </p>

          </div>


          {/* =================================================
              FORM AREA
          ================================================= */}

          <div className="px-7 py-8 sm:px-9">


            {/* =================================================
                ERROR MESSAGE
            ================================================= */}

            {error && (
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3.5 text-sm text-red-700">

                <AlertCircle
                  size={19}
                  className="mt-0.5 shrink-0"
                />

                <p className="leading-6">
                  {error}
                </p>

              </div>
            )}


            {/* =================================================
                FORM
            ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >


              {/* =================================================
                  EMAIL
              ================================================= */}

              <div>

                <label
                  htmlFor="admin-email"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={19}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="admin-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter admin email"
                    autoComplete="email"
                    disabled={loading}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />

                </div>

              </div>


              {/* =================================================
                  PASSWORD
              ================================================= */}

              <div>

                <label
                  htmlFor="admin-password"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Password
                </label>

                <div className="relative">

                  <Lock
                    size={19}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="admin-password"
                    name="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    placeholder="Enter password"
                    autoComplete="current-password"
                    disabled={loading}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:opacity-60"
                  />


                  {/* Show / Hide Password */}

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    disabled={loading}
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 disabled:cursor-not-allowed"
                  >

                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}

                  </button>

                </div>

              </div>


              {/* =================================================
                  LOGIN BUTTON
              ================================================= */}

              <button
                type="submit"
                disabled={loading}
                className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >

                {loading ? (
                  <>
                    <Loader2
                      size={19}
                      className="animate-spin"
                    />

                    Logging in...
                  </>
                ) : (
                  <>
                    Sign In

                    <ArrowRight
                      size={19}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}

              </button>

            </form>


            {/* =================================================
                SECURITY MESSAGE
            ================================================= */}

            <div className="mt-7 flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3.5">

              <ShieldCheck
                size={18}
                className="mt-0.5 shrink-0 text-blue-600"
              />

              <p className="text-xs leading-5 text-slate-500">
                This area is restricted to authorized
                Snehal Foundation administrators.
              </p>

            </div>

          </div>

        </div>


        {/* =====================================================
            FOOTER
        ===================================================== */}

        <p className="mt-6 text-center text-xs text-slate-500">
          Snehal Foundation · Administration Portal
        </p>

      </div>

    </main>
  );
};

export default AdminLogin;