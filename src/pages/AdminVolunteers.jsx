import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminVolunteers = () => {
  const navigate = useNavigate();

  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // VIEW DETAILS
  // =========================

  const [selectedVolunteer, setSelectedVolunteer] =
    useState(null);

  // =========================
  // SEARCH & FILTER
  // =========================

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // =========================
  // FETCH VOLUNTEERS
  // =========================

  const fetchVolunteers = async () => {
    try {
      setLoading(true);
      setError("");

      const token = localStorage.getItem("adminToken");

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
        "Fetch volunteer error:",
        err
      );

      setError(
        err.message ||
          "Something went wrong while loading applications."
      );
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // LOAD DATA
  // =========================

  useEffect(() => {
    fetchVolunteers();
  }, []);

  // =========================
  // STATUS BADGE
  // =========================

  const StatusBadge = ({ status }) => {
    const currentStatus = status || "Pending";

    let classes = "";

    if (currentStatus === "Approved") {
      classes =
        "bg-green-100 text-green-700 border-green-200";
    } else if (currentStatus === "Rejected") {
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
  // FILTER APPLICATIONS
  // =========================

  const filteredVolunteers = volunteers.filter(
    (volunteer) => {
      const search = searchTerm
        .toLowerCase()
        .trim();

      const matchesSearch =
        volunteer.fullName
          ?.toLowerCase()
          .includes(search) ||
        volunteer.email
          ?.toLowerCase()
          .includes(search) ||
        volunteer.mobile
          ?.toLowerCase()
          .includes(search);

      const currentStatus =
        volunteer.status || "Pending";

      const matchesStatus =
        statusFilter === "All" ||
        currentStatus === statusFilter;

      return matchesSearch && matchesStatus;
    }
  );

  // =========================
  // UPDATE STATUS
  // =========================

  const updateStatus = async (
    volunteerId,
    newStatus
  ) => {
    try {
      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin");
        return;
      }

      const response = await fetch(
        `http://localhost:5000/api/volunteer/${volunteerId}/status`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            status: newStatus,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to update status."
        );
      }

      // Update table immediately
      setVolunteers((prev) =>
        prev.map((volunteer) =>
          volunteer._id === volunteerId
            ? {
                ...volunteer,
                status: newStatus,
              }
            : volunteer
        )
      );

      // Update popup if open
      if (
        selectedVolunteer &&
        selectedVolunteer._id === volunteerId
      ) {
        setSelectedVolunteer({
          ...selectedVolunteer,
          status: newStatus,
        });
      }

    } catch (err) {
      console.error(
        "Update status error:",
        err
      );

      alert(
        err.message ||
          "Unable to update status."
      );
    }
  };

  // =========================
  // DELETE APPLICATION
  // =========================

  const deleteVolunteer = async (
    volunteerId
  ) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this volunteer application?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin");
        return;
      }

      const response = await fetch(
        `http://localhost:5000/api/volunteer/${volunteerId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to delete application."
        );
      }

      // Remove from table
      setVolunteers((prev) =>
        prev.filter(
          (volunteer) =>
            volunteer._id !== volunteerId
        )
      );

      // Close popup
      setSelectedVolunteer(null);

      alert(
        "Volunteer application deleted successfully."
      );

    } catch (err) {
      console.error(
        "Delete volunteer error:",
        err
      );

      alert(
        err.message ||
          "Unable to delete application."
      );
    }
  };

  // =========================
  // CLEAR FILTERS
  // =========================

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("All");
  };

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
  // RETURN
  // =========================

  return (
    <main className="min-h-screen bg-slate-100 px-4 md:px-8 lg:px-12 py-10">

      <div className="max-w-7xl mx-auto">

        {/* =========================
            HEADER
        ========================= */}

        <div className="mb-8">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>

              <button
                onClick={() =>
                  navigate("/admin/dashboard")
                }
                className="mb-5 inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition"
              >
                ← Back to Dashboard
              </button>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                Volunteer Applications
              </h1>

              <div className="h-1 w-24 bg-yellow-400 mt-4 rounded"></div>

              <p className="text-gray-600 mt-4">
                Manage volunteer applications
                submitted through Snehal
                Foundation.
              </p>

            </div>

            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>

          </div>

        </div>


        {/* =========================
            LOADING
        ========================= */}

        {loading && (
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

            <p className="text-gray-600 text-lg">
              Loading volunteer applications...
            </p>

          </div>
        )}


        {/* =========================
            ERROR
        ========================= */}

        {!loading && error && (
          <div className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-5">
            {error}
          </div>
        )}


        {/* =========================
            CONTENT
        ========================= */}

        {!loading && !error && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            {/* =========================
                TOP BAR
            ========================= */}

            <div className="px-6 py-5 border-b">

              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                <div>

                  <h2 className="text-xl font-bold text-gray-800">
                    Applications
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Showing{" "}
                    {filteredVolunteers.length}{" "}
                    of {volunteers.length}{" "}
                    applications
                  </p>

                </div>


                <button
                  onClick={fetchVolunteers}
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Refresh
                </button>

              </div>


              {/* =========================
                  SEARCH & FILTER
              ========================= */}

              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">

                {/* SEARCH */}

                <div className="md:col-span-2">

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Search Applications
                  </label>

                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(
                        e.target.value
                      )
                    }
                    placeholder="Search by name, email or mobile..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  />

                </div>


                {/* STATUS */}

                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Filter by Status
                  </label>

                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(
                        e.target.value
                      )
                    }
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                  >

                    <option value="All">
                      All Applications
                    </option>

                    <option value="Pending">
                      Pending
                    </option>

                    <option value="Approved">
                      Approved
                    </option>

                    <option value="Rejected">
                      Rejected
                    </option>

                  </select>

                </div>

              </div>


              {/* CLEAR FILTERS */}

              {(searchTerm ||
                statusFilter !== "All") && (

                <button
                  onClick={clearFilters}
                  className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                >
                  Clear Filters
                </button>

              )}

            </div>


            {/* =========================
                NO RESULTS
            ========================= */}

            {filteredVolunteers.length === 0 ? (

              <div className="p-12 text-center">

                <p className="text-gray-500 text-lg">
                  No applications found.
                </p>

                <p className="text-gray-400 mt-2">
                  Try changing your search or
                  filter.
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

                      <th className="px-6 py-4 font-semibold text-gray-700">
                        Action
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {filteredVolunteers.map(
                      (volunteer) => (

                        <tr
                          key={volunteer._id}
                          className="border-t hover:bg-gray-50 transition"
                        >

                          <td className="px-6 py-4 font-medium text-gray-800">
                            {volunteer.fullName ||
                              "-"}
                          </td>

                          <td className="px-6 py-4 text-gray-600">
                            {volunteer.email ||
                              "-"}
                          </td>

                          <td className="px-6 py-4 text-gray-600">
                            {volunteer.mobile ||
                              "-"}
                          </td>

                          <td className="px-6 py-4 text-gray-600">
                            {volunteer.city ||
                              "-"}
                          </td>

                          <td className="px-6 py-4">

                            <StatusBadge
                              status={
                                volunteer.status
                              }
                            />

                          </td>

                          <td className="px-6 py-4 text-gray-600">

                            {volunteer.date
                              ? new Date(
                                  volunteer.date
                                ).toLocaleDateString()
                              : "-"}

                          </td>


                          {/* ACTION */}

                          <td className="px-6 py-4">

                            <div className="flex flex-wrap gap-2">

                              <button
                                onClick={() =>
                                  setSelectedVolunteer(
                                    volunteer
                                  )
                                }
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm font-medium"
                              >
                                View
                              </button>

                              <button
                                onClick={() =>
                                  deleteVolunteer(
                                    volunteer._id
                                  )
                                }
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-medium"
                              >
                                Delete
                              </button>

                            </div>

                          </td>

                        </tr>

                      )
                    )}

                  </tbody>

                </table>

              </div>

            )}

          </div>
        )}

      </div>


      {/* =================================================
          VIEW DETAILS MODAL
      ================================================= */}

      {selectedVolunteer && (

        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">

            {/* MODAL HEADER */}

            <div className="sticky top-0 bg-white border-b px-6 py-5 flex items-center justify-between">

              <div>

                <h2 className="text-2xl font-bold text-gray-800">
                  Volunteer Details
                </h2>

                <p className="text-gray-500 mt-1">
                  {selectedVolunteer.fullName ||
                    "Volunteer"}
                </p>

              </div>

              <button
                onClick={() =>
                  setSelectedVolunteer(null)
                }
                className="text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>

            </div>


            {/* MODAL CONTENT */}

            <div className="p-6 space-y-8">

              {/* PERSONAL INFORMATION */}

              <section>

                <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <Detail
                    label="Full Name"
                    value={
                      selectedVolunteer.fullName
                    }
                  />

                  <Detail
                    label="Parent / Spouse Name"
                    value={
                      selectedVolunteer.parentName
                    }
                  />

                  <Detail
                    label="Date of Birth"
                    value={
                      selectedVolunteer.dateOfBirth
                    }
                  />

                  <Detail
                    label="Gender"
                    value={
                      selectedVolunteer.gender
                    }
                  />

                  <Detail
                    label="Nationality"
                    value={
                      selectedVolunteer.nationality
                    }
                  />

                </div>

              </section>


              {/* CONTACT INFORMATION */}

              <section>

                <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <Detail
                    label="Mobile"
                    value={
                      selectedVolunteer.mobile
                    }
                  />

                  <Detail
                    label="Alternate Mobile"
                    value={
                      selectedVolunteer.alternateMobile
                    }
                  />

                  <Detail
                    label="Email"
                    value={
                      selectedVolunteer.email
                    }
                  />

                </div>

              </section>


              {/* ADDRESS */}

              <section>

                <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
                  Address
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <Detail
                    label="Address"
                    value={
                      selectedVolunteer.address
                    }
                  />

                  <Detail
                    label="City"
                    value={
                      selectedVolunteer.city
                    }
                  />

                  <Detail
                    label="State"
                    value={
                      selectedVolunteer.state
                    }
                  />

                  <Detail
                    label="PIN Code"
                    value={
                      selectedVolunteer.pinCode
                    }
                  />

                  <Detail
                    label="Aadhaar Number"
                    value={
                      selectedVolunteer.aadhaarNumber
                        ? `XXXX-XXXX-${selectedVolunteer.aadhaarNumber.slice(-4)}`
                        : "-"
                    }
                  />

                </div>

              </section>


              {/* EDUCATION & WORK */}

              <section>

                <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
                  Education & Work
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <Detail
                    label="Qualification"
                    value={
                      selectedVolunteer.qualification
                    }
                  />

                  <Detail
                    label="Occupation"
                    value={
                      selectedVolunteer.occupation
                    }
                  />

                  <Detail
                    label="Organization"
                    value={
                      selectedVolunteer.organization
                    }
                  />

                  <Detail
                    label="Skills"
                    value={
                      selectedVolunteer.skills
                    }
                  />

                </div>

              </section>


              {/* VOLUNTEER INFORMATION */}

              <section>

                <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
                  Volunteer Information
                </h3>

                <div className="space-y-4">

                  <Detail
                    label="Reason to Join"
                    value={
                      selectedVolunteer.reasonToJoin
                    }
                  />

                  <Detail
                    label="Available Days"
                    value={
                      selectedVolunteer.availableDays
                    }
                  />

                  <Detail
                    label="Available Time"
                    value={
                      selectedVolunteer.availableTime
                    }
                  />

                </div>

              </section>


              {/* EMERGENCY CONTACT */}

              <section>

                <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
                  Emergency Contact
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  <Detail
                    label="Name"
                    value={
                      selectedVolunteer.emergencyName
                    }
                  />

                  <Detail
                    label="Relation"
                    value={
                      selectedVolunteer.emergencyRelation
                    }
                  />

                  <Detail
                    label="Mobile"
                    value={
                      selectedVolunteer.emergencyMobile
                    }
                  />

                </div>

              </section>


              {/* STATUS */}

              <section>

                <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
                  Application Status
                </h3>

                <div className="flex flex-wrap items-center gap-3">

                  <StatusBadge
                    status={
                      selectedVolunteer.status
                    }
                  />

                  <button
                    onClick={() =>
                      updateStatus(
                        selectedVolunteer._id,
                        "Approved"
                      )
                    }
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        selectedVolunteer._id,
                        "Rejected"
                      )
                    }
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Reject
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        selectedVolunteer._id,
                        "Pending"
                      )
                    }
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
                  >
                    Pending
                  </button>

                </div>

              </section>


              {/* DECLARATION */}

              <section>

                <h3 className="text-lg font-bold text-gray-800 border-b pb-2 mb-4">
                  Declaration
                </h3>

                <p className="text-gray-700">
                  {selectedVolunteer.declaration
                    ? "Declaration accepted"
                    : "Declaration not accepted"}
                </p>

              </section>

            </div>


            {/* MODAL FOOTER */}

            <div className="border-t px-6 py-5 flex flex-col sm:flex-row justify-between gap-3">

              <button
                onClick={() =>
                  deleteVolunteer(
                    selectedVolunteer._id
                  )
                }
                className="bg-red-600 text-white px-5 py-2.5 rounded-lg hover:bg-red-700 transition"
              >
                Delete Application
              </button>

              <button
                onClick={() =>
                  setSelectedVolunteer(null)
                }
                className="bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg hover:bg-gray-300 transition"
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </main>
  );
};


// =====================================================
// DETAIL COMPONENT
// =====================================================

const Detail = ({ label, value }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">

      <p className="text-sm text-gray-500 font-medium">
        {label}
      </p>

      <p className="text-gray-800 mt-1 break-words">
        {value || "-"}
      </p>

    </div>
  );
};


export default AdminVolunteers;