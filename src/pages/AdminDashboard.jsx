import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Clock3,
  CheckCircle2,
  XCircle,
  RefreshCw,
  LogOut,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  ClipboardList,
  UserRound,
  CalendarDays,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Activity,
} from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [volunteers, setVolunteers] = useState([]);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");

  // =====================================================
  // API BASE URL
  // =====================================================

  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

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

      const token = localStorage.getItem("adminToken");

      // No token → Admin Login
      if (!token) {
        navigate("/admin/login", { replace: true });
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

      // Unauthorized / expired token
      if (response.status === 401 || response.status === 403) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login", { replace: true });
        return;
      }

      if (!response.ok) {
        throw new Error(
          data.message ||
            "Unable to fetch volunteer applications."
        );
      }

      setVolunteers(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Dashboard fetch error:", err);

      setError(
        err.message ||
          "Something went wrong while loading the dashboard."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  // =====================================================
// FETCH UNREAD CONTACT MESSAGES
// =====================================================

const fetchUnreadMessages = async () => {
  try {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    const response = await fetch(
      `${API_URL}/api/contact`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();

    if (response.status === 401 || response.status === 403) {
      localStorage.removeItem("adminToken");
      navigate("/admin/login", { replace: true });
      return;
    }

    if (!response.ok) {
      throw new Error(
        data.message || "Unable to fetch contact messages."
      );
    }

    const messages = Array.isArray(data) ? data : [];

    const unreadCount = messages.filter(
      (message) => !message.isRead
    ).length;

    setUnreadMessages(unreadCount);

  } catch (err) {
    console.error(
      "Unread messages fetch error:",
      err
    );
  }
};

  // =====================================================
  // LOAD DASHBOARD
  // =====================================================

  useEffect(() => {
    fetchVolunteers();
      fetchUnreadMessages();
  }, []);

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
  // STATISTICS
  // =====================================================

  const totalApplications = volunteers.length;

  const pendingApplications = volunteers.filter(
    (volunteer) =>
      !volunteer.status ||
      volunteer.status.toLowerCase() === "pending"
  ).length;

  const approvedApplications = volunteers.filter(
    (volunteer) =>
      volunteer.status &&
      volunteer.status.toLowerCase() === "approved"
  ).length;

  const rejectedApplications = volunteers.filter(
    (volunteer) =>
      volunteer.status &&
      volunteer.status.toLowerCase() === "rejected"
  ).length;

  // =====================================================
  // RECENT APPLICATIONS
  // =====================================================

  const recentApplications = [...volunteers]
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

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (volunteer) => {
    const dateValue =
      volunteer.date || volunteer.createdAt;

    if (!dateValue) {
      return "-";
    }

    const date = new Date(dateValue);

    if (Number.isNaN(date.getTime())) {
      return "-";
    }

    return date.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

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
  // STAT CARD
  // =====================================================

  const StatCard = ({
    title,
    value,
    description,
    icon: Icon,
    iconContainer,
  }) => {
    return (
      <div className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6">

        <div className="flex items-start justify-between gap-4">

          <div>
            <p className="text-sm font-medium text-slate-500">
              {title}
            </p>

            <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {value}
            </p>
          </div>

          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${iconContainer}`}
          >
            <Icon size={23} />
          </div>

        </div>

        <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
          <Activity
            size={14}
            className="text-slate-400"
          />

          <p className="text-xs text-slate-500">
            {description}
          </p>
        </div>

      </div>
    );
  };

  // =====================================================
  // LOADING STATE
  // =====================================================

  if (loading) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="flex min-h-[70vh] items-center justify-center">

            <div className="w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-10 text-center shadow-xl">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <LayoutDashboard
                  size={27}
                  className="animate-pulse"
                />
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                Loading Dashboard
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Please wait while we load the latest
                volunteer applications.
              </p>

              <div className="mx-auto mt-6 h-1.5 w-32 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-1/2 animate-pulse rounded-full bg-blue-600" />
              </div>

            </div>

          </div>

        </div>

      </main>
    );
  }

  // =====================================================
  // DASHBOARD
  // =====================================================

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">

      <div className="mx-auto max-w-7xl">

        {/* =================================================
            TOP HEADER
        ================================================= */}

        <div className="relative mb-8 overflow-hidden rounded-[2rem] bg-slate-950 shadow-xl">

          {/* Decorative glows */}

          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-blue-800/20 blur-3xl" />

          <div className="relative flex flex-col gap-6 px-6 py-7 sm:px-8 sm:py-8 lg:flex-row lg:items-center lg:justify-between">

            {/* Heading */}

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-950/40">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                    Administration Portal
                  </p>

                  <p className="mt-0.5 text-sm text-slate-400">
                    Snehal Foundation
                  </p>
                </div>

              </div>

              <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Admin Dashboard
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
                Manage volunteer applications and monitor
                your foundation's volunteer activity.
              </p>

            </div>


            {/* Actions */}

            <div className="flex flex-wrap gap-3">

              <button
                type="button"
                onClick={() => fetchVolunteers(true)}
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


        {/* =================================================
            ERROR
        ================================================= */}

        {error && (
          <div className="mb-8 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">

            <AlertCircle
              size={20}
              className="mt-0.5 shrink-0"
            />

            <div>

              <p className="font-semibold">
                Unable to load applications
              </p>

              <p className="mt-1 text-sm leading-6">
                {error}
              </p>

            </div>

          </div>
        )}


        {/* =================================================
            STATISTICS
        ================================================= */}

        <section className="mb-8">

          <div className="mb-5">

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Overview
            </p>

            <h2 className="mt-1 text-2xl font-bold text-slate-900">
              Volunteer Activity
            </h2>

          </div>


          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">

            <StatCard
              title="Total Applications"
              value={totalApplications}
              description="All volunteer applications"
              icon={Users}
              iconContainer="bg-blue-50 text-blue-600"
            />

            <StatCard
              title="Pending"
              value={pendingApplications}
              description="Waiting for review"
              icon={Clock3}
              iconContainer="bg-amber-50 text-amber-600"
            />

            <StatCard
              title="Approved"
              value={approvedApplications}
              description="Accepted volunteers"
              icon={CheckCircle2}
              iconContainer="bg-emerald-50 text-emerald-600"
            />

            <StatCard
              title="Rejected"
              value={rejectedApplications}
              description="Rejected applications"
              icon={XCircle}
              iconContainer="bg-red-50 text-red-600"
            />

            <button
  type="button"
  onClick={() => navigate("/admin/messages")}
  className="group rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-6"
>
  <div className="flex items-start justify-between gap-4">

    <div>
      <p className="text-sm font-medium text-slate-500">
        New Messages
      </p>

      <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        {unreadMessages}
      </p>
    </div>

    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
      <MessageSquare size={23} />
    </div>

  </div>

  <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
    <Mail
      size={14}
      className="text-slate-400"
    />

    <p className="text-xs text-slate-500">
      Unread contact messages
    </p>
  </div>

</button>

          </div>

        </section>


        {/* =================================================
            RECENT APPLICATIONS
        ================================================= */}

        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">

          {/* Section Header */}

          <div className="flex flex-col gap-4 border-b border-slate-100 px-6 py-6 sm:px-7 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <ClipboardList size={20} />
                </div>

                <div>

                  <h2 className="text-xl font-bold text-slate-900">
                    Recent Applications
                  </h2>

                  <p className="mt-0.5 text-sm text-slate-500">
                    Latest volunteer applications
                  </p>

                </div>

              </div>

            </div>


            <Link
              to="/admin/volunteers"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              View All Applications

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />

            </Link>

          </div>


          {/* =================================================
              EMPTY STATE
          ================================================= */}

          {recentApplications.length === 0 ? (

            <div className="px-6 py-16 text-center sm:px-10">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                <ClipboardList size={28} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-slate-900">
                No Volunteer Applications
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                New volunteer applications will appear
                here once visitors submit the volunteer
                form.
              </p>

            </div>

          ) : (

            /* =================================================
               TABLE
            ================================================= */

            <div className="overflow-x-auto">

              <table className="w-full min-w-[850px] text-left">

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

                  </tr>

                </thead>


                <tbody className="divide-y divide-slate-100">

                  {recentApplications.map(
                    (volunteer) => (

                      <tr
                        key={volunteer._id}
                        className="transition-colors duration-200 hover:bg-blue-50/40"
                      >

                        {/* APPLICANT */}

                        <td className="px-6 py-5">

                          <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                              <UserRound size={19} />
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

                            <span>
                              {volunteer.city ||
                                "-"}
                            </span>

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

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </section>


        {/* =================================================
            QUICK ACTIONS
        ================================================= */}

        <section className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">


          {/* MANAGE VOLUNTEERS */}

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 shadow-lg sm:p-8">

            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-600/20 blur-3xl" />

            <div className="relative">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Users size={23} />
              </div>

              <h3 className="mt-6 text-xl font-bold text-white">
                Manage Volunteers
              </h3>

              <p className="mt-2 max-w-lg text-sm leading-6 text-slate-400">
                View complete volunteer applications,
                review applicant information, update
                application status, or remove records.
              </p>

              <Link
                to="/admin/volunteers"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Manage Applications

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>


          {/* APPLICATION SUMMARY */}

          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm sm:p-8">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <LayoutDashboard size={23} />
              </div>

              <div>

                <h3 className="text-xl font-bold text-slate-900">
                  Application Summary
                </h3>

                <p className="text-sm text-slate-500">
                  Current volunteer application status
                </p>

              </div>

            </div>


            <div className="mt-7 space-y-4">

              {/* Total */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="h-2.5 w-2.5 rounded-full bg-blue-600" />

                  <span className="text-sm text-slate-600">
                    Total Applications
                  </span>

                </div>

                <span className="font-bold text-slate-900">
                  {totalApplications}
                </span>

              </div>


              {/* Pending */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500" />

                  <span className="text-sm text-slate-600">
                    Pending
                  </span>

                </div>

                <span className="font-bold text-amber-600">
                  {pendingApplications}
                </span>

              </div>


              {/* Approved */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

                  <span className="text-sm text-slate-600">
                    Approved
                  </span>

                </div>

                <span className="font-bold text-emerald-600">
                  {approvedApplications}
                </span>

              </div>


              {/* Rejected */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="h-2.5 w-2.5 rounded-full bg-red-500" />

                  <span className="text-sm text-slate-600">
                    Rejected
                  </span>

                </div>

                <span className="font-bold text-red-600">
                  {rejectedApplications}
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =================================================
            ADMIN FOOTER
        ================================================= */}

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-6 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-slate-400">
            Snehal Foundation · Administration Portal
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

    </main>
  );
};

export default AdminDashboard;