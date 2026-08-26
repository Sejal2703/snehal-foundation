import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:5000/api/admin/login",
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

      // Save login token
      localStorage.setItem("adminToken", data.token);

      // Go to admin applications
      navigate("/admin/dashboard");

    } catch (err) {
      console.error("Admin login error:", err);

      setError(
        err.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center px-4 pt-20">

      <div className="w-full max-w-md">

        {/* ================= LOGIN CARD ================= */}

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">

          {/* Heading */}

          <div className="text-center mb-8">

            <h1 className="text-3xl font-bold text-gray-800">
              Admin Login
            </h1>

            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4 rounded"></div>

            <p className="text-gray-500 mt-4">
              Snehal Foundation Administration
            </p>

          </div>


          {/* ================= ERROR ================= */}

          {error && (
            <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg mb-5">
              {error}
            </div>
          )}


          {/* ================= FORM ================= */}

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            {/* Email */}

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter admin email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>


            {/* Password */}

            <div>

              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>


            {/* Submit */}

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-bold text-lg transition ${
                loading
                  ? "bg-gray-400 cursor-not-allowed text-white"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>

        </div>

      </div>

    </main>
  );
};

export default AdminLogin;