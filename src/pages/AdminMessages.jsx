import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  MailOpen,
  Search,
  Eye,
  Trash2,
  X,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Inbox,
  MessageSquare,
} from "lucide-react";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

const AdminMessages = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedMessage, setSelectedMessage] = useState(null);

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const [statusPopup, setStatusPopup] = useState(null);

  // =====================================================
  // FETCH MESSAGES
  // =====================================================

  const fetchMessages = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${API_URL}/api/contact`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to fetch messages."
        );
      }

      setMessages(data);
    } catch (error) {
      console.error("Fetch messages error:", error);

      setStatusPopup({
        type: "error",
        title: "Unable to Load Messages",
        message:
          error.message ||
          "Something went wrong while loading messages.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // =====================================================
  // POPUP
  // =====================================================

  const showPopup = (type, title, message) => {
    setStatusPopup({
      type,
      title,
      message,
    });

    setTimeout(() => {
      setStatusPopup(null);
    }, 3500);
  };

  // =====================================================
  // MARK READ / UNREAD
  // =====================================================

  const toggleReadStatus = async (message) => {
    try {
      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${API_URL}/api/contact/${message._id}/read`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            isRead: !message.isRead,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to update message."
        );
      }

      setMessages((prev) =>
        prev.map((item) =>
          item._id === message._id
            ? data.data
            : item
        )
      );

      setSelectedMessage(data.data);

      showPopup(
        "success",
        message.isRead
          ? "Marked as Unread"
          : "Marked as Read",
        message.isRead
          ? "The message has been marked as unread."
          : "The message has been marked as read."
      );
    } catch (error) {
      console.error(
        "Update read status error:",
        error
      );

      showPopup(
        "error",
        "Update Failed",
        error.message ||
          "Unable to update message status."
      );
    }
  };

  // =====================================================
  // DELETE MESSAGE
  // =====================================================

  const deleteMessage = async () => {
    if (!deleteTarget) return;

    try {
      setDeleting(true);

      const token = localStorage.getItem("adminToken");

      const response = await fetch(
        `${API_URL}/api/contact/${deleteTarget._id}`,
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
          data.message || "Unable to delete message."
        );
      }

      setMessages((prev) =>
        prev.filter(
          (item) => item._id !== deleteTarget._id
        )
      );

      if (
        selectedMessage?._id ===
        deleteTarget._id
      ) {
        setSelectedMessage(null);
      }

      setDeleteTarget(null);

      showPopup(
        "success",
        "Message Deleted",
        "The contact message has been deleted successfully."
      );
    } catch (error) {
      console.error(
        "Delete message error:",
        error
      );

      showPopup(
        "error",
        "Delete Failed",
        error.message ||
          "Unable to delete the message."
      );
    } finally {
      setDeleting(false);
    }
  };

  // =====================================================
  // FILTER
  // =====================================================

  const filteredMessages = messages.filter(
    (message) => {
      const searchText =
        search.toLowerCase();

      return (
        message.name
          ?.toLowerCase()
          .includes(searchText) ||
        message.email
          ?.toLowerCase()
          .includes(searchText) ||
        message.subject
          ?.toLowerCase()
          .includes(searchText) ||
        message.message
          ?.toLowerCase()
          .includes(searchText)
      );
    }
  );

  const unreadCount = messages.filter(
    (message) => !message.isRead
  ).length;

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleString(
      "en-IN",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }
    );
  };

  // =====================================================
  // RETURN
  // =====================================================

  return (
    <main className="min-h-screen bg-slate-100">

      {/* =================================================
          HEADER
      ================================================= */}

      <section className="bg-slate-950 px-6 py-8 text-white">
        <div className="mx-auto max-w-7xl">

          <button
            onClick={() =>
              navigate("/admin/dashboard")
            }
            className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Dashboard
          </button>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="mb-2 text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                Administration
              </p>

              <h1 className="text-3xl font-bold sm:text-4xl">
                Contact Messages
              </h1>

              <p className="mt-2 max-w-2xl text-slate-400">
                Manage enquiries and messages received
                through the Snehal Foundation website.
              </p>
            </div>

            <div className="flex items-center gap-3">

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3">
                <p className="text-xs text-slate-400">
                  Total Messages
                </p>

                <p className="mt-1 text-2xl font-bold">
                  {messages.length}
                </p>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 px-5 py-3">
                <p className="text-xs text-blue-300">
                  Unread
                </p>

                <p className="mt-1 text-2xl font-bold text-blue-300">
                  {unreadCount}
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =================================================
          CONTENT
      ================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">

        {/* SEARCH */}

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div className="relative w-full sm:max-w-md">

            <Search
              size={19}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search messages..."
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />

          </div>

          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              {filteredMessages.length}
            </span>{" "}
            message
            {filteredMessages.length !== 1
              ? "s"
              : ""}
          </p>

        </div>


        {/* =================================================
            LOADING
        ================================================= */}

        {loading && (
          <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-white shadow-sm">

            <div className="text-center">

              <Loader2
                size={34}
                className="mx-auto animate-spin text-blue-600"
              />

              <p className="mt-4 font-medium text-slate-600">
                Loading messages...
              </p>

            </div>

          </div>
        )}


        {/* =================================================
            EMPTY
        ================================================= */}

        {!loading &&
          filteredMessages.length === 0 && (
            <div className="flex min-h-[400px] items-center justify-center rounded-3xl bg-white shadow-sm">

              <div className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Inbox size={30} />
                </div>

                <h2 className="mt-5 text-xl font-bold text-slate-900">
                  No Messages Found
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
                  {search
                    ? "No messages match your search."
                    : "Messages submitted through the Contact page will appear here."}
                </p>

              </div>

            </div>
          )}


        {/* =================================================
            MESSAGE LIST
        ================================================= */}

        {!loading &&
          filteredMessages.length > 0 && (
            <div className="space-y-4">

              {filteredMessages.map(
                (message) => (
                  <div
                    key={message._id}
                    className={`rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${
                      message.isRead
                        ? "border-slate-200"
                        : "border-blue-200 bg-blue-50/30"
                    }`}
                  >

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                      {/* MESSAGE INFO */}

                      <div className="min-w-0 flex-1">

                        <div className="flex flex-wrap items-center gap-3">

                          <h2 className="text-lg font-bold text-slate-900">
                            {message.name}
                          </h2>

                          {!message.isRead && (
                            <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                              Unread
                            </span>
                          )}

                          {message.isRead && (
                            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                              Read
                            </span>
                          )}

                        </div>

                        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">

                          <span className="inline-flex items-center gap-1.5">
                            <Mail size={15} />
                            {message.email}
                          </span>

                          <span>
                            {formatDate(
                              message.date ||
                                message.createdAt
                            )}
                          </span>

                        </div>

                        <h3 className="mt-4 font-semibold text-slate-800">
                          {message.subject}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                          {message.message}
                        </p>

                      </div>


                      {/* ACTIONS */}

                      <div className="flex shrink-0 flex-wrap gap-2">

                        <button
                          onClick={() =>
                            setSelectedMessage(
                              message
                            )
                          }
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                        >
                          <Eye size={17} />
                          View
                        </button>

                        <button
                          onClick={() =>
                            toggleReadStatus(
                              message
                            )
                          }
                          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                        >
                          {message.isRead ? (
                            <Mail size={17} />
                          ) : (
                            <MailOpen size={17} />
                          )}

                          {message.isRead
                            ? "Unread"
                            : "Read"}
                        </button>

                        <button
                          onClick={() =>
                            setDeleteTarget(
                              message
                            )
                          }
                          className="inline-flex items-center gap-2 rounded-xl border border-red-100 bg-white px-4 py-2.5 text-sm font-semibold text-red-600 transition hover:-translate-y-0.5 hover:border-red-200 hover:bg-red-50"
                        >
                          <Trash2 size={17} />
                          Delete
                        </button>

                      </div>

                    </div>

                  </div>
                )
              )}

            </div>
          )}

      </section>


      {/* =================================================
          VIEW MESSAGE MODAL
      ================================================= */}

      {selectedMessage && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-950/60 px-4 py-6 backdrop-blur-sm">

          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl">

            <button
              onClick={() =>
                setSelectedMessage(null)
              }
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
            >
              <X size={20} />
            </button>

            <div className="p-7 sm:p-9">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <MessageSquare size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                    Contact Message
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-slate-900">
                    Message Details
                  </h2>
                </div>

              </div>


              <div className="mt-8 space-y-6">

                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Name
                    </p>

                    <p className="mt-1 font-semibold text-slate-800">
                      {selectedMessage.name}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email
                    </p>

                    <p className="mt-1 break-all font-semibold text-slate-800">
                      {selectedMessage.email}
                    </p>
                  </div>

                </div>


                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Subject
                  </p>

                  <p className="mt-1 font-semibold text-slate-800">
                    {selectedMessage.subject}
                  </p>
                </div>


                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Received
                  </p>

                  <p className="mt-1 text-sm text-slate-600">
                    {formatDate(
                      selectedMessage.date ||
                        selectedMessage.createdAt
                    )}
                  </p>
                </div>


                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Message
                  </p>

                  <div className="mt-2 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
                    {selectedMessage.message}
                  </div>
                </div>

              </div>


              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">

                <button
                  onClick={() =>
                    toggleReadStatus(
                      selectedMessage
                    )
                  }
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  {selectedMessage.isRead ? (
                    <Mail size={18} />
                  ) : (
                    <MailOpen size={18} />
                  )}

                  {selectedMessage.isRead
                    ? "Mark Unread"
                    : "Mark Read"}
                </button>

                <button
                  onClick={() => {
                    setDeleteTarget(
                      selectedMessage
                    );
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
                >
                  <Trash2 size={18} />
                  Delete Message
                </button>

              </div>

            </div>

          </div>

        </div>
      )}


      {/* =================================================
          DELETE CONFIRMATION
      ================================================= */}

      {deleteTarget && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm">

          <div className="w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <Trash2 size={25} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-slate-900">
              Delete Message?
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              Are you sure you want to delete the message from{" "}
              <span className="font-semibold text-slate-900">
                {deleteTarget.name}
              </span>
              ? This action cannot be undone.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">

              <button
                onClick={() =>
                  setDeleteTarget(null)
                }
                disabled={deleting}
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-60"
              >
                Cancel
              </button>

              <button
                onClick={deleteMessage}
                disabled={deleting}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {deleting ? (
                  <>
                    <Loader2
                      size={18}
                      className="animate-spin"
                    />
                    Deleting...
                  </>
                ) : (
                  <>
                    <Trash2 size={18} />
                    Delete Message
                  </>
                )}
              </button>

            </div>

          </div>

        </div>
      )}


      {/* =================================================
          STATUS POPUP
      ================================================= */}

      {statusPopup && (
        <div className="fixed right-4 top-5 z-[150] w-[calc(100vw-2rem)] max-w-md animate-[messagePopup_0.35s_ease-out]">

          <div
            className={`overflow-hidden rounded-2xl border bg-white shadow-2xl ${
              statusPopup.type === "error"
                ? "border-red-200"
                : "border-blue-200"
            }`}
          >

            <div className="flex gap-4 p-5">

              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                  statusPopup.type === "error"
                    ? "bg-red-50 text-red-600"
                    : "bg-blue-50 text-blue-600"
                }`}
              >
                {statusPopup.type === "error" ? (
                  <AlertCircle size={22} />
                ) : (
                  <CheckCircle2 size={22} />
                )}
              </div>

              <div className="min-w-0 flex-1">

                <div className="flex items-start justify-between gap-3">

                  <div>
                    <h3 className="font-bold text-slate-900">
                      {statusPopup.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {statusPopup.message}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      setStatusPopup(null)
                    }
                    className="shrink-0 text-slate-400 transition hover:text-slate-700"
                  >
                    <X size={18} />
                  </button>

                </div>

              </div>

            </div>

            <div className="h-1 bg-slate-100">
              <div
                className={`h-full origin-left ${
                  statusPopup.type === "error"
                    ? "bg-red-500"
                    : "bg-blue-600"
                }`}
                style={{
                  animation:
                    "messagePopupProgress 3.5s linear forwards",
                }}
              />
            </div>

          </div>

        </div>
      )}


      {/* =================================================
          POPUP ANIMATIONS
      ================================================= */}

      <style>
        {`
          @keyframes messagePopup {
            from {
              opacity: 0;
              transform: translateY(-15px) translateX(15px);
            }

            to {
              opacity: 1;
              transform: translateY(0) translateX(0);
            }
          }

          @keyframes messagePopupProgress {
            from {
              transform: scaleX(1);
            }

            to {
              transform: scaleX(0);
            }
          }
        `}
      </style>

    </main>
  );
};

export default AdminMessages;