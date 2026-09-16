import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  RefreshCw,
  LogOut,
  Search,
  Filter,
  Users,
  UserRound,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  Eye,
  Trash2,
  X,
  CheckCircle2,
  XCircle,
  Clock3,
  ShieldCheck,
  ClipboardList,
  GraduationCap,
  BriefcaseBusiness,
  HeartHandshake,
  AlertCircle,
  Loader2,
  ChevronDown,
} from "lucide-react";

const AdminVolunteers = () => {
  const navigate = useNavigate();

  // =====================================================
  // API
  // =====================================================

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  // =====================================================
  // DATA
  // =====================================================

  const [volunteers, setVolunteers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // VIEW DETAILS
  // =====================================================

  const [selectedVolunteer, setSelectedVolunteer] =
    useState(null);

  // =====================================================
  // SEARCH & FILTER
  // =====================================================

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // =====================================================
  // ACTION STATES
  // =====================================================

  const [updatingStatus, setUpdatingStatus] =
    useState(false);

  const [deletingId, setDeletingId] =
    useState(null);


// =====================================================
// STATUS POPUP
// =====================================================

const [statusPopup, setStatusPopup] = useState(null);
  // =====================================================
  // FETCH VOLUNTEERS
  // =====================================================

  const fetchVolunteers = async (isRefresh = false) => {
    try {
      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      setError("");

      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login", {
          replace: true,
        });
        return;
      }

      const response = await fetch(
        `${API_URL}/api/volunteer`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (
        response.status === 401 ||
        response.status === 403
      ) {
        localStorage.removeItem("adminToken");

        navigate("/admin/login", {
          replace: true,
        });

        return;
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to fetch applications."
        );
      }

      setVolunteers(
        Array.isArray(data) ? data : []
      );
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
      setRefreshing(false);
    }
  };

  // =====================================================
  // LOAD DATA
  // =====================================================

  useEffect(() => {
    fetchVolunteers();
  }, []);

  // =====================================================
  // STATUS BADGE
  // =====================================================

  const StatusBadge = ({ status }) => {
    const currentStatus =
      status || "Pending";

    const normalizedStatus =
      currentStatus.toLowerCase();

    if (normalizedStatus === "approved") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
          <CheckCircle2 size={13} />
          Approved
        </span>
      );
    }

    if (normalizedStatus === "rejected") {
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-700">
          <XCircle size={13} />
          Rejected
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
        <Clock3 size={13} />
        Pending
      </span>
    );
  };

  // =====================================================
  // FILTER APPLICATIONS
  // =====================================================

  const filteredVolunteers =
    volunteers.filter((volunteer) => {
      const search =
        searchTerm.toLowerCase().trim();

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

      return (
        matchesSearch && matchesStatus
      );
    });

  // =====================================================
  // UPDATE STATUS
  // =====================================================

  const updateStatus = async (
    volunteerId,
    newStatus
  ) => {
    try {
      setUpdatingStatus(true);

      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login", {
          replace: true,
        });
        return;
      }

      const response = await fetch(
        `${API_URL}/api/volunteer/${volunteerId}/status`,
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

      if (
        response.status === 401 ||
        response.status === 403
      ) {
        localStorage.removeItem("adminToken");

        navigate("/admin/login", {
          replace: true,
        });

        return;
      }

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

      // Update modal immediately
      setSelectedVolunteer((prev) =>
        prev &&
        prev._id === volunteerId
          ? {
              ...prev,
              status: newStatus,
            }
          : prev
      );
// Show success popup
setStatusPopup({
  type: newStatus.toLowerCase(),
  title:
    newStatus === "Approved"
      ? "Application Approved"
      : newStatus === "Rejected"
      ? "Application Rejected"
      : "Application Set to Pending",
  message:
    newStatus === "Approved"
      ? "The volunteer application has been approved successfully."
      : newStatus === "Rejected"
      ? "The volunteer application has been rejected successfully."
      : "The volunteer application has been moved back to pending review.",
});

// Automatically hide popup
setTimeout(() => {
  setStatusPopup(null);
}, 3500);
      
    } catch (err) {
      console.error(
        "Update status error:",
        err
      );

      setError(
        err.message ||
          "Unable to update status."
      );
    } finally {
      setUpdatingStatus(false);
    }
  };

  // =====================================================
  // DELETE APPLICATION
  // =====================================================

  const deleteVolunteer = async (
    volunteerId
  ) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this volunteer application? This action cannot be undone."
      );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeletingId(volunteerId);
      setError("");

      const token =
        localStorage.getItem("adminToken");

      if (!token) {
        navigate("/admin/login", {
          replace: true,
        });
        return;
      }

      const response = await fetch(
        `${API_URL}/api/volunteer/${volunteerId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (
        response.status === 401 ||
        response.status === 403
      ) {
        localStorage.removeItem("adminToken");

        navigate("/admin/login", {
          replace: true,
        });

        return;
      }

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

      // Close modal if open
      if (
        selectedVolunteer?._id ===
        volunteerId
      ) {
        setSelectedVolunteer(null);
      }

      // Show delete success popup
      setStatusPopup({
        type: "deleted",
        title: "Application Deleted",
        message: "The volunteer application has been deleted successfully.",
      });

      // Automatically hide popup
      setTimeout(() => {
        setStatusPopup(null);
      }, 3500);
    } catch (err) {
      console.error(
        "Delete volunteer error:",
        err
      );

      setError(
        err.message ||
          "Unable to delete application."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // =====================================================
  // CLEAR FILTERS
  // =====================================================

  const clearFilters = () => {
    setSearchTerm("");
    setStatusFilter("All");
  };

  // =====================================================
  // LOGOUT
  // =====================================================

  const handleLogout = () => {
    localStorage.removeItem("adminToken");

    navigate("/admin/login", {
      replace: true,
    });
  };

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (volunteer) => {
    const dateValue =
      volunteer.date ||
      volunteer.createdAt;

    if (!dateValue) {
      return "-";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "-";
    }

    return date.toLocaleDateString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  // =====================================================
  // DETAIL COMPONENT
  // =====================================================

  const Detail = ({
    label,
    value,
    icon: Icon,
    fullWidth = false,
  }) => {
    return (
      <div
        className={`rounded-xl border border-slate-200 bg-slate-50 p-4 ${
          fullWidth
            ? "md:col-span-2"
            : ""
        }`}
      >
        <div className="flex items-center gap-2">

          {Icon && (
            <Icon
              size={15}
              className="text-blue-600"
            />
          )}

          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
            {label}
          </p>

        </div>

        <p className="mt-2 break-words text-sm font-medium leading-6 text-slate-800">
          {value || "-"}
        </p>
      </div>
    );
  };

  // =====================================================
  // LOADING STATE
  // =====================================================

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">

        <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center justify-center">

          <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-xl">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">

              <Users
                size={27}
                className="animate-pulse"
              />

            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              Loading Applications
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Please wait while we load the
              volunteer applications.
            </p>

            <div className="mx-auto mt-6 h-1.5 w-32 overflow-hidden rounded-full bg-slate-100">

              <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-600" />

            </div>

          </div>

        </div>

      </main>
    );
  }

  // =====================================================
  // MAIN
  // =====================================================

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

      <div className="mx-auto max-w-7xl">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="relative mb-8 overflow-hidden rounded-[2rem] bg-slate-950 shadow-xl">

          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-800/20 blur-3xl" />

          <div className="relative px-6 py-7 sm:px-8 sm:py-8">

            {/* Back */}

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/admin/dashboard"
                )
              }
              className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors duration-200 hover:text-white"
            >
              <ArrowLeft size={17} />
              Back to Dashboard
            </button>


            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">

              {/* Title */}

              <div>

                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-950/40">

                    <Users size={22} />

                  </div>

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                      Volunteer Management
                    </p>

                    <p className="mt-0.5 text-sm text-slate-400">
                      Snehal Foundation
                    </p>

                  </div>

                </div>

                <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Volunteer Applications
                </h1>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                  Review, manage and track
                  volunteer applications submitted
                  through the Snehal Foundation
                  website.
                </p>

              </div>


              {/* Actions */}

              <div className="flex flex-wrap gap-3">

                <button
                  type="button"
                  onClick={() =>
                    fetchVolunteers(true)
                  }
                  disabled={refreshing}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  <RefreshCw
                    size={17}
                    className={
                      refreshing
                        ? "animate-spin"
                        : ""
                    }
                  />

                  {refreshing
                    ? "Refreshing..."
                    : "Refresh"}

                </button>


                <button
                  type="button"
                  onClick={handleLogout}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100"
                >

                  <LogOut size={17} />

                  Logout

                </button>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            ERROR
        ================================================= */}

        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">

            <AlertCircle
              size={20}
              className="mt-0.5 shrink-0"
            />

            <div className="flex-1">

              <p className="font-semibold">
                Something went wrong
              </p>

              <p className="mt-1 text-sm leading-6">
                {error}
              </p>

            </div>

            <button
              type="button"
              onClick={() =>
                setError("")
              }
              className="text-red-400 transition hover:text-red-700"
            >
              <X size={18} />
            </button>

          </div>
        )}


        {/* =================================================
            SUMMARY CARDS
        ================================================= */}

        <div className="mb-8 grid grid-cols-1 gap-5 sm:grid-cols-3">

          {/* TOTAL */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Total Applications
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {volunteers.length}
                </p>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Users size={23} />
              </div>

            </div>

          </div>


          {/* SHOWING */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Showing Results
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {filteredVolunteers.length}
                </p>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <ClipboardList size={23} />
              </div>

            </div>

          </div>


          {/* PENDING */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm font-medium text-slate-500">
                  Pending Review
                </p>

                <p className="mt-2 text-3xl font-bold text-amber-600">

                  {
                    volunteers.filter(
                      (volunteer) =>
                        !volunteer.status ||
                        volunteer.status.toLowerCase() ===
                          "pending"
                    ).length
                  }

                </p>

              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                <Clock3 size={23} />
              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            APPLICATIONS PANEL
        ================================================= */}

        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

          {/* =================================================
              PANEL HEADER
          ================================================= */}

          <div className="border-b border-slate-100 px-6 py-6 sm:px-7">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <ClipboardList size={20} />
                  </div>

                  <div>

                    <h2 className="text-xl font-bold text-slate-900">
                      Applications
                    </h2>

                    <p className="mt-0.5 text-sm text-slate-500">
                      Showing{" "}
                      <span className="font-semibold text-slate-700">
                        {
                          filteredVolunteers.length
                        }
                      </span>{" "}
                      of{" "}
                      <span className="font-semibold text-slate-700">
                        {volunteers.length}
                      </span>{" "}
                      applications
                    </p>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                SEARCH & FILTER
            ================================================= */}

            <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_240px_auto]">

              {/* SEARCH */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Search Applications
                </label>

                <div className="relative">

                  <Search
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) =>
                      setSearchTerm(
                        e.target.value
                      )
                    }
                    placeholder="Search by name, email or mobile..."
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-4 text-sm text-slate-800 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                </div>

              </div>


              {/* STATUS */}

              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Filter by Status
                </label>

                <div className="relative">

                  <Filter
                    size={17}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <select
                    value={statusFilter}
                    onChange={(e) =>
                      setStatusFilter(
                        e.target.value
                      )
                    }
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-11 pr-10 text-sm font-medium text-slate-700 outline-none transition-all duration-200 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
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

                  <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                </div>

              </div>


              {/* CLEAR */}

              <div className="flex items-end">

                <button
                  type="button"
                  onClick={clearFilters}
                  disabled={
                    !searchTerm &&
                    statusFilter === "All"
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 lg:w-auto"
                >
                  Clear Filters
                </button>

              </div>

            </div>

          </div>


          {/* =================================================
              NO RESULTS
          ================================================= */}

          {filteredVolunteers.length ===
          0 ? (

            <div className="px-6 py-16 text-center sm:px-10">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <Search size={27} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                No Applications Found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                No volunteer applications match
                your current search or filter.
              </p>

              {(searchTerm ||
                statusFilter !== "All") && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Clear Filters
                </button>
              )}

            </div>

          ) : (

            /* =================================================
               TABLE
            ================================================= */

            <div className="overflow-x-auto">

              <table className="w-full min-w-[1050px] text-left">

                <thead className="bg-slate-50">

                  <tr>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Applicant
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Contact
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Location
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Status
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Submitted
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Actions
                    </th>

                  </tr>

                </thead>


                <tbody className="divide-y divide-slate-100">

                  {filteredVolunteers.map(
                    (volunteer) => (

                      <tr
                        key={
                          volunteer._id
                        }
                        className="transition-colors duration-200 hover:bg-blue-50/40"
                      >

                        {/* APPLICANT */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                              <UserRound
                                size={19}
                              />

                            </div>

                            <div className="min-w-0">

                              <p className="truncate font-semibold text-slate-900">
                                {volunteer.fullName ||
                                  "-"}
                              </p>

                              <p className="mt-0.5 text-xs text-slate-400">
                                Volunteer Applicant
                              </p>

                            </div>

                          </div>

                        </td>


                        {/* CONTACT */}

                        <td className="px-6 py-5">

                          <div className="space-y-1.5">

                            <div className="flex items-center gap-2 text-sm text-slate-600">

                              <Mail
                                size={14}
                                className="shrink-0 text-slate-400"
                              />

                              <span className="max-w-[220px] truncate">
                                {volunteer.email ||
                                  "-"}
                              </span>

                            </div>

                            <div className="flex items-center gap-2 text-xs text-slate-500">

                              <Phone
                                size={13}
                                className="shrink-0 text-slate-400"
                              />

                              {volunteer.mobile ||
                                "-"}

                            </div>

                          </div>

                        </td>


                        {/* LOCATION */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2 text-sm text-slate-600">

                            <MapPin
                              size={15}
                              className="shrink-0 text-slate-400"
                            />

                            {volunteer.city ||
                              "-"}

                          </div>

                        </td>


                        {/* STATUS */}

                        <td className="px-6 py-5">

                          <StatusBadge
                            status={
                              volunteer.status
                            }
                          />

                        </td>


                        {/* DATE */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2 text-sm text-slate-600">

                            <CalendarDays
                              size={15}
                              className="shrink-0 text-slate-400"
                            />

                            {formatDate(
                              volunteer
                            )}

                          </div>

                        </td>


                        {/* ACTIONS */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-2">

                            <button
                              type="button"
                              onClick={() =>
                                setSelectedVolunteer(
                                  volunteer
                                )
                              }
                              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3.5 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-blue-500"
                            >
                              <Eye
                                size={14}
                              />
                              View
                            </button>


                            <button
                              type="button"
                              onClick={() =>
                                deleteVolunteer(
                                  volunteer._id
                                )
                              }
                              disabled={
                                deletingId ===
                                volunteer._id
                              }
                              className="inline-flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-3.5 py-2 text-xs font-semibold text-red-600 transition-all duration-200 hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                            >

                              {deletingId ===
                              volunteer._id ? (
                                <Loader2
                                  size={14}
                                  className="animate-spin"
                                />
                              ) : (
                                <Trash2
                                  size={14}
                                />
                              )}

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

        </section>


        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-400">
            Snehal Foundation · Volunteer
            Management
          </p>

          <div className="flex items-center gap-2 text-xs text-slate-400">

            <ShieldCheck
              size={14}
              className="text-blue-500"
            />

            Authorized access only

          </div>

        </div>

      </div>


      {/* =====================================================
          VIEW DETAILS MODAL
      ===================================================== */}

      {selectedVolunteer && (

        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (
              e.target === e.currentTarget
            ) {
              setSelectedVolunteer(null);
            }
          }}
        >

          <div className="flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl">

            {/* =================================================
                MODAL HEADER
            ================================================= */}

            <div className="shrink-0 border-b border-slate-100 bg-white px-6 py-5 sm:px-7">

              <div className="flex items-center justify-between gap-4">

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">

                    <UserRound
                      size={21}
                    />

                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Volunteer Application
                    </p>

                    <h2 className="mt-1 truncate text-xl font-bold text-slate-900 sm:text-2xl">
                      {selectedVolunteer.fullName ||
                        "Volunteer"}
                    </h2>

                  </div>

                </div>


                <button
                  type="button"
                  onClick={() =>
                    setSelectedVolunteer(
                      null
                    )
                  }
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800"
                >
                  <X size={20} />
                </button>

              </div>

            </div>


            {/* =================================================
                MODAL CONTENT
            ================================================= */}

            <div className="overflow-y-auto">

              <div className="space-y-8 p-6 sm:p-7">


                {/* =================================================
                    APPLICATION STATUS SUMMARY
                ================================================= */}

                <div className="rounded-2xl bg-slate-950 p-5 sm:p-6">

                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                    <div>

                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-400">
                        Current Status
                      </p>

                      <div className="mt-3">
                        <StatusBadge
                          status={
                            selectedVolunteer.status
                          }
                        />
                      </div>

                    </div>


                    <div className="flex flex-wrap gap-2">

                      <button
                        type="button"
                        onClick={() =>
                          updateStatus(
                            selectedVolunteer._id,
                            "Approved"
                          )
                        }
                        disabled={
                          updatingStatus
                        }
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                      >

                        {updatingStatus ? (
                          <Loader2
                            size={16}
                            className="animate-spin"
                          />
                        ) : (
                          <CheckCircle2
                            size={16}
                          />
                        )}

                        Approve

                      </button>


                      <button
                        type="button"
                        onClick={() =>
                          updateStatus(
                            selectedVolunteer._id,
                            "Rejected"
                          )
                        }
                        disabled={
                          updatingStatus
                        }
                        className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                      >

                        <XCircle
                          size={16}
                        />

                        Reject

                      </button>


                      <button
                        type="button"
                        onClick={() =>
                          updateStatus(
                            selectedVolunteer._id,
                            "Pending"
                          )
                        }
                        disabled={
                          updatingStatus
                        }
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
                      >

                        <Clock3
                          size={16}
                        />

                        Pending

                      </button>

                    </div>

                  </div>

                </div>


                {/* =================================================
                    PERSONAL INFORMATION
                ================================================= */}

                <section>

                  <SectionHeading
                    icon={UserRound}
                    title="Personal Information"
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <Detail
                      label="Full Name"
                      value={
                        selectedVolunteer.fullName
                      }
                      icon={UserRound}
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
                      icon={CalendarDays}
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


                {/* =================================================
                    CONTACT INFORMATION
                ================================================= */}

                <section>

                  <SectionHeading
                    icon={Phone}
                    title="Contact Information"
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <Detail
                      label="Mobile"
                      value={
                        selectedVolunteer.mobile
                      }
                      icon={Phone}
                    />

                    <Detail
                      label="Alternate Mobile"
                      value={
                        selectedVolunteer.alternateMobile
                      }
                      icon={Phone}
                    />

                    <Detail
                      label="Email"
                      value={
                        selectedVolunteer.email
                      }
                      icon={Mail}
                    />

                  </div>

                </section>


                {/* =================================================
                    ADDRESS
                ================================================= */}

                <section>

                  <SectionHeading
                    icon={MapPin}
                    title="Address"
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <Detail
                      label="Address"
                      value={
                        selectedVolunteer.address
                      }
                      icon={MapPin}
                      fullWidth
                    />

                    <Detail
                      label="City"
                      value={
                        selectedVolunteer.city
                      }
                      icon={MapPin}
                    />

                    <Detail
                      label="State"
                      value={
                        selectedVolunteer.state
                      }
                      icon={MapPin}
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
                          ? `XXXX-XXXX-${selectedVolunteer.aadhaarNumber.slice(
                              -4
                            )}`
                          : "-"
                      }
                      icon={ShieldCheck}
                    />

                  </div>

                </section>


                {/* =================================================
                    EDUCATION & WORK
                ================================================= */}

                <section>

                  <SectionHeading
                    icon={GraduationCap}
                    title="Education & Work"
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <Detail
                      label="Qualification"
                      value={
                        selectedVolunteer.qualification
                      }
                      icon={GraduationCap}
                    />

                    <Detail
                      label="Occupation"
                      value={
                        selectedVolunteer.occupation
                      }
                      icon={BriefcaseBusiness}
                    />

                    <Detail
                      label="Organization"
                      value={
                        selectedVolunteer.organization
                      }
                      icon={BriefcaseBusiness}
                    />

                    <Detail
                      label="Skills"
                      value={
                        selectedVolunteer.skills
                      }
                      icon={HeartHandshake}
                    />

                  </div>

                </section>


                {/* =================================================
                    VOLUNTEER INFORMATION
                ================================================= */}

                <section>

                  <SectionHeading
                    icon={HeartHandshake}
                    title="Volunteer Information"
                  />

                  <div className="grid grid-cols-1 gap-4">

                    <Detail
                      label="Reason to Join"
                      value={
                        selectedVolunteer.reasonToJoin
                      }
                      icon={HeartHandshake}
                      fullWidth
                    />

                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                      <Detail
                        label="Available Days"
                        value={
                          selectedVolunteer.availableDays
                        }
                        icon={CalendarDays}
                      />

                      <Detail
                        label="Available Time"
                        value={
                          selectedVolunteer.availableTime
                        }
                        icon={Clock3}
                      />

                    </div>

                  </div>

                </section>


                {/* =================================================
                    EMERGENCY CONTACT
                ================================================= */}

                <section>

                  <SectionHeading
                    icon={AlertCircle}
                    title="Emergency Contact"
                  />

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <Detail
                      label="Name"
                      value={
                        selectedVolunteer.emergencyName
                      }
                      icon={UserRound}
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
                      icon={Phone}
                    />

                  </div>

                </section>


                {/* =================================================
                    DECLARATION
                ================================================= */}

                <section>

                  <SectionHeading
                    icon={ShieldCheck}
                    title="Declaration"
                  />

                  <div
                    className={`rounded-2xl border p-5 ${
                      selectedVolunteer.declaration
                        ? "border-emerald-200 bg-emerald-50"
                        : "border-red-200 bg-red-50"
                    }`}
                  >

                    <div className="flex items-start gap-3">

                      {selectedVolunteer.declaration ? (
                        <CheckCircle2
                          size={21}
                          className="mt-0.5 shrink-0 text-emerald-600"
                        />
                      ) : (
                        <XCircle
                          size={21}
                          className="mt-0.5 shrink-0 text-red-600"
                        />
                      )}

                      <div>

                        <p
                          className={`font-semibold ${
                            selectedVolunteer.declaration
                              ? "text-emerald-800"
                              : "text-red-800"
                          }`}
                        >
                          {selectedVolunteer.declaration
                            ? "Declaration accepted"
                            : "Declaration not accepted"}
                        </p>

                        <p
                          className={`mt-1 text-sm leading-6 ${
                            selectedVolunteer.declaration
                              ? "text-emerald-700"
                              : "text-red-700"
                          }`}
                        >
                          The volunteer's declaration
                          status is recorded with this
                          application.
                        </p>

                      </div>

                    </div>

                  </div>

                </section>

              </div>

            </div>


            {/* =================================================
                MODAL FOOTER
            ================================================= */}

            <div className="shrink-0 border-t border-slate-100 bg-slate-50 px-6 py-5 sm:px-7">

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                <button
                  type="button"
                  onClick={() =>
                    deleteVolunteer(
                      selectedVolunteer._id
                    )
                  }
                  disabled={
                    deletingId ===
                    selectedVolunteer._id
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-5 py-3 text-sm font-semibold text-red-600 transition-all duration-200 hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
                >

                  {deletingId ===
                  selectedVolunteer._id ? (
                    <Loader2
                      size={17}
                      className="animate-spin"
                    />
                  ) : (
                    <Trash2
                      size={17}
                    />
                  )}

                  Delete Application

                </button>


                <button
                  type="button"
                  onClick={() =>
                    setSelectedVolunteer(
                      null
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-slate-800"
                >
                  Close
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

      <style>{`
        @keyframes adminVolunteerPopupIn {
          from { opacity: 0; transform: translateY(-12px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes adminVolunteerPopupProgress {
          from { transform: scaleX(1); }
          to { transform: scaleX(0); }
        }
      `}</style>

      {/* =====================================================
    STATUS SUCCESS POPUP
===================================================== */}

{statusPopup && (
  <div className="fixed right-4 top-4 z-[100] w-[calc(100%-2rem)] max-w-md sm:right-6 sm:top-6">

    <div
      style={{ animation: "adminVolunteerPopupIn 0.3s ease-out" }}
      className={`relative overflow-hidden rounded-2xl border bg-white p-4 shadow-2xl transition-all duration-300 ${
        statusPopup.type === "approved"
          ? "border-emerald-200"
          : statusPopup.type === "rejected"
          ? "border-red-200"
          : "border-amber-200"
      }`}
    >

      {/* Top accent */}
      <div
        className={`absolute left-0 top-0 h-full w-1 ${
          statusPopup.type === "approved"
            ? "bg-emerald-500"
            : statusPopup.type === "rejected"
            ? "bg-red-500"
            : statusPopup.type === "deleted"
            ? "bg-blue-500"
            : "bg-amber-500"
        }`}
      />

      <div className="flex items-start gap-3 pl-2">

        {/* Icon */}
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
            statusPopup.type === "approved"
              ? "bg-emerald-50 text-emerald-600"
              : statusPopup.type === "rejected"
              ? "bg-red-50 text-red-600"
              : statusPopup.type === "deleted"
              ? "bg-blue-50 text-blue-600"
              : "bg-amber-50 text-amber-600"
          }`}
        >
          {statusPopup.type === "approved" ? (
            <CheckCircle2 size={21} />
          ) : statusPopup.type === "rejected" ? (
            <XCircle size={21} />
          ) : statusPopup.type === "deleted" ? (
            <Trash2 size={21} />
          ) : (
            <Clock3 size={21} />
          )}
        </div>

        {/* Message */}
        <div className="min-w-0 flex-1">

          <p className="text-sm font-bold text-slate-900">
            {statusPopup.title}
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-500">
            {statusPopup.message}
          </p>

        </div>

        {/* Close */}
        <button
          type="button"
          onClick={() => setStatusPopup(null)}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          aria-label="Close notification"
        >
          <X size={17} />
        </button>

      </div>

      {/* Progress bar */}
      <div className="mt-4 h-1 overflow-hidden rounded-full bg-slate-100">

        <div
          className={`h-full w-full origin-left ${
            statusPopup.type === "approved"
              ? "bg-emerald-500"
              : statusPopup.type === "rejected"
              ? "bg-red-500"
              : statusPopup.type === "deleted"
              ? "bg-blue-500"
              : "bg-amber-500"
          }`}
          style={{ animation: "adminVolunteerPopupProgress 3.5s linear forwards" }}
        />

      </div>

    </div>

  </div>
)}

    </main>
  );
};


// =====================================================
// SECTION HEADING
// =====================================================

const SectionHeading = ({
  icon: Icon,
  title,
}) => {
  return (
    <div className="mb-4 flex items-center gap-3">

      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <Icon size={18} />
      </div>

      <h3 className="text-lg font-bold text-slate-900">
        {title}
      </h3>

    </div>
  );
};


export default AdminVolunteers;