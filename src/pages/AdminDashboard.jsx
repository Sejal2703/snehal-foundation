import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // FETCH VOLUNTEERS
  // =========================

  const fetchVolunteers = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("adminToken");

      // No token → Admin Login
      if (!token) {
        navigate("/admin");
        return;
      }

      const response = await fetch(
        "http://localhost:5000/api/volunteer",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to fetch applications."
        );
      }

      setVolunteers(data);
    } catch (err) {
      console.error(
        "Dashboard fetch error:",
        err
      );

      setError(
        err.message ||
          "Something went wrong while loading dashboard."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOAD DASHBOARD
  // =========================

  useEffect(() => {
    fetchVolunteers();
  }, []);

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    navigate("/admin", {
      replace: true,
    });
  };

  // =========================
  // STATISTICS
  // =========================

  const totalApplications =
    volunteers.length;

  const pendingApplications =
    volunteers.filter(
      (volunteer) =>
        !volunteer.status ||
        volunteer.status === "Pending"
    ).length;

  const approvedApplications =
    volunteers.filter(
      (volunteer) =>
        volunteer.status === "Approved"
    ).length;

  const rejectedApplications =
    volunteers.filter(
      (volunteer) =>
        volunteer.status === "Rejected"
    ).length;

  // =========================
  // RECENT APPLICATIONS
  // =========================

  const recentApplications = [
    ...volunteers,
  ]
    .sort((a, b) => {
      const dateA = new Date(
        a.date || a.createdAt || 0
      );

      const dateB = new Date(
        b.date || b.createdAt || 0
      );

      return dateB - dateA;
    })
    .slice(0, 5);

  // =========================
  // STATUS BADGE
  // =========================

  const StatusBadge = ({ status }) => {
    const currentStatus =
      status || "Pending";

    let classes = "";

    if (currentStatus === "Approved") {
      classes =
        "bg-green-100 text-green-700 border-green-200";
    } else if (
      currentStatus === "Rejected"
    ) {
      classes =
        "bg-red-100 text-red-700 border-red-200";
    } else {
      classes =
        "bg-yellow-100 text-yellow-700 border-yellow-200";
    }

    return (
      <span
        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${classes}`}
      >
        {currentStatus}
      </span>
    );
  };

  // =========================
  // LOADING
  // =========================

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-100 px-4 md:px-8 lg:px-12 py-10">

        <div className="max-w-7xl mx-auto">

          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

            <p className="text-gray-600 text-lg">
              Loading admin dashboard...
            </p>

          </div>

        </div>

      </main>
    );
  }

  // =========================
  // DASHBOARD
  // =========================

  return (
    <main className="min-h-screen bg-slate-100 px-4 md:px-8 lg:px-12 py-10">

      <div className="max-w-7xl mx-auto">

        {/* =========================
            HEADER
        ========================= */}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-8">

          <div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Admin Dashboard
            </h1>

            <div className="h-1 w-24 bg-yellow-400 mt-4 rounded"></div>

            <p className="text-gray-600 mt-4">
              Welcome to the Snehal Foundation
              administration panel.
            </p>

          </div>


          {/* HEADER BUTTONS */}

          <div className="flex flex-wrap gap-3">

            <button
              onClick={fetchVolunteers}
              className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Refresh
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition font-medium"
            >
              Logout
            </button>

          </div>

        </div>


        {/* =========================
            ERROR
        ========================= */}

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-5 mb-8">
            {error}
          </div>
        )}


        {/* =========================
            STAT CARDS
        ========================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">

          {/* TOTAL */}

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500">

            <p className="text-gray-500 font-medium">
              Total Applications
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              {totalApplications}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              All volunteer applications
            </p>

          </div>


          {/* PENDING */}

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-yellow-400">

            <p className="text-gray-500 font-medium">
              Pending
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              {pendingApplications}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Waiting for review
            </p>

          </div>


          {/* APPROVED */}

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-green-500">

            <p className="text-gray-500 font-medium">
              Approved
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              {approvedApplications}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Accepted volunteers
            </p>

          </div>


          {/* REJECTED */}

          <div className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-red-500">

            <p className="text-gray-500 font-medium">
              Rejected
            </p>

            <h2 className="text-4xl font-bold text-gray-800 mt-3">
              {rejectedApplications}
            </h2>

            <p className="text-sm text-gray-400 mt-2">
              Rejected applications
            </p>

          </div>

        </div>


        {/* =========================
            RECENT APPLICATIONS
        ========================= */}

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* SECTION HEADER */}

          <div className="px-6 py-5 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>

              <h2 className="text-xl font-bold text-gray-800">
                Recent Applications
              </h2>

              <p className="text-gray-500 mt-1">
                Latest volunteer applications
              </p>

            </div>


            <Link
              to="/admin/volunteers"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-center font-medium"
            >
              View All Applications
            </Link>

          </div>


          {/* =========================
              NO APPLICATIONS
          ========================= */}

          {recentApplications.length === 0 ? (

            <div className="p-12 text-center">

              <p className="text-gray-500 text-lg">
                No volunteer applications
                found.
              </p>

              <p className="text-gray-400 mt-2">
                New applications will appear
                here.
              </p>

            </div>

          ) : (

            /* =========================
               TABLE
            ========================= */

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead className="bg-gray-100">

                  <tr>

                    <th className="px-6 py-4 font-semibold text-gray-700">
                      Name
                    </th>

                    <th className="px-6 py-4 font-semibold text-gray-700">
                      Email
                    </th>

                    <th className="px-6 py-4 font-semibold text-gray-700">
                      Mobile
                    </th>

                    <th className="px-6 py-4 font-semibold text-gray-700">
                      City
                    </th>

                    <th className="px-6 py-4 font-semibold text-gray-700">
                      Status
                    </th>

                    <th className="px-6 py-4 font-semibold text-gray-700">
                      Date
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {recentApplications.map(
                    (volunteer) => (

                      <tr
                        key={volunteer._id}
                        className="border-t hover:bg-gray-50 transition"
                      >

                        {/* NAME */}

                        <td className="px-6 py-4 font-medium text-gray-800">
                          {volunteer.fullName ||
                            "-"}
                        </td>


                        {/* EMAIL */}

                        <td className="px-6 py-4 text-gray-600">
                          {volunteer.email ||
                            "-"}
                        </td>


                        {/* MOBILE */}

                        <td className="px-6 py-4 text-gray-600">
                          {volunteer.mobile ||
                            "-"}
                        </td>


                        {/* CITY */}

                        <td className="px-6 py-4 text-gray-600">
                          {volunteer.city ||
                            "-"}
                        </td>


                        {/* STATUS */}

                        <td className="px-6 py-4">

                          <StatusBadge
                            status={
                              volunteer.status
                            }
                          />

                        </td>


                        {/* DATE */}

                        <td className="px-6 py-4 text-gray-600">

                          {volunteer.date ||
                          volunteer.createdAt
                            ? new Date(
                                volunteer.date ||
                                  volunteer.createdAt
                              ).toLocaleDateString()
                            : "-"}

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </div>


        {/* =========================
            QUICK ACTION
        ========================= */}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* VIEW APPLICATIONS */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h3 className="text-lg font-bold text-gray-800">
              Manage Applications
            </h3>

            <p className="text-gray-500 mt-2">
              View complete volunteer
              applications, update their
              status, or delete applications.
            </p>

            <Link
              to="/admin/volunteers"
              className="inline-block mt-5 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Manage Volunteers
            </Link>

          </div>


          {/* DASHBOARD INFORMATION */}

          <div className="bg-white rounded-2xl shadow-lg p-6">

            <h3 className="text-lg font-bold text-gray-800">
              Application Summary
            </h3>

            <div className="mt-4 space-y-3">

              <div className="flex justify-between">

                <span className="text-gray-600">
                  Total
                </span>

                <span className="font-bold text-gray-800">
                  {totalApplications}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-yellow-600">
                  Pending
                </span>

                <span className="font-bold text-yellow-600">
                  {pendingApplications}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-green-600">
                  Approved
                </span>

                <span className="font-bold text-green-600">
                  {approvedApplications}
                </span>

              </div>

              <div className="flex justify-between">

                <span className="text-red-600">
                  Rejected
                </span>

                <span className="font-bold text-red-600">
                  {rejectedApplications}
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
};

export default AdminDashboard;