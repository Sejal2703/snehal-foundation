import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  Send,
  Sparkles,
  Heart,
  HandHeart,
  GraduationCap,
  HeartPulse,
  BriefcaseBusiness,
  Users,
  MessageCircle,
  ArrowRight,
  Smile,
} from "lucide-react";

/* =========================================================
   SNEHAL BOT
   Small floating mascot — NO circular background
========================================================= */

const SnehalBot = ({
  size = "launcher",
  reaction = "idle",
}) => {
  const sizes = {
    launcher: {
      wrapper: "w-[58px] h-[70px]",
      head: "w-[48px] h-[38px]",
      body: "w-[42px] h-[32px]",
    },

    chat: {
      wrapper: "w-[42px] h-[52px]",
      head: "w-[35px] h-[29px]",
      body: "w-[31px] h-[25px]",
    },
  };

  const s = sizes[size] || sizes.launcher;

  return (
    <div
      className={`relative ${s.wrapper} select-none snehal-mascot`}
      aria-hidden="true"
    >
      {/* =====================================================
          ANTENNA
      ===================================================== */}

      <div className="absolute left-1/2 top-0 z-30 -translate-x-1/2">
        <div className="flex flex-col items-center">
          <div className="h-[9px] w-[2px] rounded-full bg-blue-500" />

          <div
            className={`h-[7px] w-[7px] rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.75)] ${
              reaction === "attention"
                ? "snehal-antenna-pulse"
                : ""
            }`}
          />
        </div>
      </div>

      {/* =====================================================
          HEAD
      ===================================================== */}

      <div
        className={`absolute left-1/2 top-[9px] z-20 -translate-x-1/2 ${
          s.head
        } rounded-[42%] border border-slate-200 bg-white shadow-[0_5px_12px_rgba(15,23,42,0.15)] snehal-head`}
      >
        {/* ears */}
        <div className="absolute -left-[3px] top-[12px] h-[10px] w-[4px] rounded-full bg-blue-200" />

        <div className="absolute -right-[3px] top-[12px] h-[10px] w-[4px] rounded-full bg-blue-200" />

        {/* =================================================
            EYES
        ================================================= */}

        <div
          className={`absolute left-[20%] top-[31%] h-[7px] w-[7px] rounded-full bg-slate-900 snehal-eye ${
            reaction === "happy"
              ? "snehal-happy-eye"
              : ""
          }`}
        >
          <span className="absolute left-[1.5px] top-[1px] h-[2px] w-[2px] rounded-full bg-white" />
        </div>

        <div
          className={`absolute right-[20%] top-[31%] h-[7px] w-[7px] rounded-full bg-slate-900 snehal-eye ${
            reaction === "happy"
              ? "snehal-happy-eye"
              : ""
          }`}
        >
          <span className="absolute left-[1.5px] top-[1px] h-[2px] w-[2px] rounded-full bg-white" />
        </div>

        {/* =================================================
            SMILE
        ================================================= */}

        <div
          className={`absolute bottom-[21%] left-1/2 h-[6px] w-[13px] -translate-x-1/2 rounded-b-full border-b-[2px] border-blue-600 ${
            reaction === "thinking"
              ? "rotate-[-8deg]"
              : ""
          }`}
        />

        {/* blush */}
        <div className="absolute bottom-[28%] left-[14%] h-[3px] w-[5px] rounded-full bg-blue-100" />

        <div className="absolute bottom-[28%] right-[14%] h-[3px] w-[5px] rounded-full bg-blue-100" />
      </div>

      {/* =====================================================
          BODY
      ===================================================== */}

      <div
        className={`absolute bottom-[6px] left-1/2 z-10 -translate-x-1/2 ${
          s.body
        } rounded-[43%] border border-blue-100 bg-gradient-to-b from-white to-blue-50 shadow-[0_5px_12px_rgba(15,23,42,0.11)] snehal-body`}
      >
        {/* chest */}
        <div className="absolute left-1/2 top-[28%] flex h-[13px] w-[16px] -translate-x-1/2 items-center justify-center rounded-[5px] border border-blue-100 bg-white shadow-sm">
          <Heart
            size={8}
            strokeWidth={2.4}
            className={`text-blue-600 ${
              reaction === "donate"
                ? "snehal-heart-pulse"
                : ""
            }`}
            fill={
              reaction === "donate"
                ? "currentColor"
                : "none"
            }
          />
        </div>

        {/* left arm */}
        <div
          className={`absolute -left-[6px] top-[32%] h-[17px] w-[5px] origin-top rounded-full bg-blue-500 ${
            reaction === "welcome"
              ? "snehal-wave-left"
              : ""
          }`}
        />

        {/* right arm */}
        <div
          className={`absolute -right-[6px] top-[32%] h-[17px] w-[5px] origin-top rounded-full bg-blue-500 ${
            reaction === "volunteer"
              ? "snehal-wave-right"
              : ""
          }`}
        />
      </div>

      {/* =====================================================
          FEET
      ===================================================== */}

      <div className="absolute bottom-0 left-[22%] h-[6px] w-[10px] rounded-full bg-blue-600" />

      <div className="absolute bottom-0 right-[22%] h-[6px] w-[10px] rounded-full bg-blue-600" />

      {/* =====================================================
          SMALL REACTION SPARKLES
      ===================================================== */}

      {(reaction === "welcome" ||
        reaction === "happy") && (
        <Sparkles
          size={8}
          className="absolute -right-[2px] top-[9px] text-blue-400"
        />
      )}
    </div>
  );
};

/* =========================================================
   CHATBOT
========================================================= */

const Chatbot = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);

  const [botReaction, setBotReaction] = useState("idle");
  const [isTyping, setIsTyping] = useState(false);

  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Namaste! 👋 I'm Snehal Bot. How can I help you?",
    },
  ]);

  const messagesEndRef = useRef(null);

  /* =========================================================
     INITIAL GREETING
  ========================================================= */

  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!isOpen) {
        setShowGreeting(true);
        setBotReaction("welcome");

        setTimeout(() => {
          setBotReaction("idle");
        }, 1400);
      }
    }, 2200);

    const hideTimer = setTimeout(() => {
      setShowGreeting(false);
    }, 6200);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [isOpen]);

  /* =========================================================
     PERIODIC ATTENTION
  ========================================================= */

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isOpen && !showGreeting) {
        setBotReaction("attention");

        setTimeout(() => {
          setBotReaction("idle");
        }, 1600);
      }
    }, 15000);

    return () => clearInterval(timer);
  }, [isOpen, showGreeting]);

  /* =========================================================
     AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  /* =========================================================
     OPEN
  ========================================================= */

  const openChat = () => {
    setShowGreeting(false);
    setIsOpen(true);
    setBotReaction("welcome");

    setTimeout(() => {
      setBotReaction("idle");
    }, 1100);
  };

  /* =========================================================
     CLOSE
  ========================================================= */

  const closeChat = () => {
    setIsOpen(false);
    setIsTyping(false);
    setBotReaction("idle");
  };

  /* =========================================================
     ACTION NAVIGATION
  ========================================================= */

  const handleAction = (path, reaction = "idle") => {
    setBotReaction(reaction);

    setTimeout(() => {
      navigate(path);
      setIsOpen(false);
      setBotReaction("idle");
    }, 220);
  };

  /* =========================================================
     BOT RESPONSES
  ========================================================= */

  const getBotResponse = (question) => {
    const q = question.toLowerCase().trim();

    /* ABOUT */

    if (
      q.includes("about") ||
      q.includes("snehal foundation") ||
      q.includes("who are you")
    ) {
      return {
        text:
          "Snehal Foundation works toward a safer, more dignified and empowered society through education, healthcare, protection, skill development and community-based support.",

        actions: [
          {
            label: "Learn About Us",
            path: "/about",
            icon: <ArrowRight size={13} />,
          },
          {
            label: "Our Team",
            path: "/our-team",
            icon: <Users size={13} />,
          },
        ],
      };
    }

    /* PROGRAMS */

    if (
      q.includes("program") ||
      q.includes("education") ||
      q.includes("healthcare") ||
      q.includes("health") ||
      q.includes("skill") ||
      q.includes("livelihood")
    ) {
      return {
        text:
          "Our key programmes focus on Education, Healthcare & Wellness, and Skill Development & Livelihood. We also work across protection, empowerment, rehabilitation and community-based initiatives.",

        actions: [
          {
            label: "Education",
            path: "/programs/education",
            icon: <GraduationCap size={13} />,
          },
          {
            label: "Healthcare",
            path: "/programs/healthcare",
            icon: <HeartPulse size={13} />,
          },
          {
            label: "Skill Development",
            path: "/programs/skill-development",
            icon: <BriefcaseBusiness size={13} />,
          },
        ],
      };
    }

    /* VOLUNTEER */

    if (
      q.includes("volunteer") ||
      q.includes("join") ||
      q.includes("participate")
    ) {
      return {
        text:
          "You can support Snehal Foundation by volunteering your time, skills and energy. Every contribution can help create safer and stronger communities.",

        actions: [
          {
            label: "Become a Volunteer",
            path: "/volunteer",
            icon: <HandHeart size={13} />,
          },
        ],
      };
    }

    /* DONATE */

    if (
      q.includes("donate") ||
      q.includes("donation") ||
      q.includes("contribute") ||
      q.includes("give")
    ) {
      return {
        text:
          "Your support can help Snehal Foundation continue its work with vulnerable children, girls, women and communities.",

        actions: [
          {
            label: "Donate Now",
            path: "/donate",
            icon: <Heart size={13} />,
          },
        ],
      };
    }

    /* CONTACT */

    if (
      q.includes("contact") ||
      q.includes("reach") ||
      q.includes("email") ||
      q.includes("address")
    ) {
      return {
        text:
          "You can reach the Snehal Foundation team through our Contact page. We'd be happy to hear from you.",

        actions: [
          {
            label: "Contact Us",
            path: "/contact",
            icon: <MessageCircle size={13} />,
          },
        ],
      };
    }

    /* TEAM */

    if (
      q.includes("team") ||
      q.includes("founder") ||
      q.includes("director")
    ) {
      return {
        text:
          "Our team is committed to turning compassion into action and working toward safer, more dignified and empowered communities.",

        actions: [
          {
            label: "Meet Our Team",
            path: "/our-team",
            icon: <Users size={13} />,
          },
        ],
      };
    }

    /* GREETING */

    if (
      q === "hi" ||
      q === "hello" ||
      q === "hey" ||
      q.includes("namaste") ||
      q.includes("good morning") ||
      q.includes("good evening")
    ) {
      return {
        text:
          "Namaste! 🙏 You can ask me about our programmes, volunteering, donations, the foundation or how to contact us.",
        actions: [],
      };
    }

    /* THANK YOU */

    if (
      q.includes("thank") ||
      q.includes("thanks")
    ) {
      return {
        text:
          "You're very welcome! 💙 Thank you for your interest in Snehal Foundation.",
        actions: [],
      };
    }

    /* DEFAULT */

    return {
      text:
        "I can help you explore Snehal Foundation, our programmes, volunteering, donations, our team or contact information.",

      actions: [
        {
          label: "About Us",
          path: "/about",
          icon: <ArrowRight size={13} />,
        },
        {
          label: "View Programmes",
          path: "/programs",
          icon: <Sparkles size={13} />,
        },
      ],
    };
  };

  /* =========================================================
     REACTION
  ========================================================= */

  const detectReaction = (text) => {
    const q = text.toLowerCase();

    if (
      q.includes("donate") ||
      q.includes("donation")
    ) {
      return "donate";
    }

    if (
      q.includes("volunteer") ||
      q.includes("join")
    ) {
      return "volunteer";
    }

    if (
      q.includes("program") ||
      q.includes("education") ||
      q.includes("healthcare") ||
      q.includes("skill")
    ) {
      return "helpful";
    }

    if (
      q.includes("hello") ||
      q.includes("hi") ||
      q.includes("hey") ||
      q.includes("namaste")
    ) {
      return "happy";
    }

    return "thinking";
  };

  /* =========================================================
     SEND MESSAGE
  ========================================================= */

  const sendMessage = (customText = null) => {
    const messageText =
      customText !== null
        ? customText
        : input.trim();

    if (!messageText || isTyping) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: messageText,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setInput("");

    setBotReaction(
      detectReaction(messageText)
    );

    setIsTyping(true);

    const response =
      getBotResponse(messageText);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: "bot",
          text: response.text,
          actions: response.actions,
        },
      ]);

      setIsTyping(false);

      setBotReaction(
        response.actions?.length
          ? "helpful"
          : "happy"
      );

      setTimeout(() => {
        setBotReaction("idle");
      }, 1300);
    }, 800);
  };

  /* =========================================================
     QUICK QUESTIONS
  ========================================================= */

  const quickQuestions = [
    {
      label: "About Us",
      icon: <Sparkles size={12} />,
    },
    {
      label: "Our Programmes",
      icon: <GraduationCap size={12} />,
    },
    {
      label: "Volunteer",
      icon: <HandHeart size={12} />,
    },
    {
      label: "Donate",
      icon: <Heart size={12} />,
    },
  ];

  /* =========================================================
     KEYBOARD
  ========================================================= */

  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();
      sendMessage();
    }
  };

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      {/* =====================================================
          STYLES
      ===================================================== */}

      <style>{`

        /* ================================================
           MASCOT FLOAT
        ================================================ */

        @keyframes snehalBotFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-4px);
          }
        }

        .snehal-bot-float {
          animation:
            snehalBotFloat
            4.2s
            ease-in-out
            infinite;
        }

        /* ================================================
           HEAD
        ================================================ */

        @keyframes snehalHeadMove {
          0%,
          100% {
            transform:
              translateX(-50%)
              rotate(0deg);
          }

          50% {
            transform:
              translateX(-50%)
              rotate(1deg);
          }
        }

        .snehal-head {
          animation:
            snehalHeadMove
            4.5s
            ease-in-out
            infinite;
        }

        /* ================================================
           BODY
        ================================================ */

        @keyframes snehalBodyMove {
          0%,
          100% {
            transform:
              translateX(-50%)
              translateY(0);
          }

          50% {
            transform:
              translateX(-50%)
              translateY(-1px);
          }
        }

        .snehal-body {
          animation:
            snehalBodyMove
            4s
            ease-in-out
            infinite;
        }

        /* ================================================
           WAVE
        ================================================ */

        @keyframes snehalWaveLeft {
          0%,
          100% {
            transform: rotate(5deg);
          }

          25% {
            transform: rotate(-25deg);
          }

          50% {
            transform: rotate(-5deg);
          }

          75% {
            transform: rotate(-25deg);
          }
        }

        .snehal-wave-left {
          animation:
            snehalWaveLeft
            1.1s
            ease-in-out;
        }

        @keyframes snehalWaveRight {
          0%,
          100% {
            transform: rotate(-5deg);
          }

          25% {
            transform: rotate(25deg);
          }

          50% {
            transform: rotate(5deg);
          }

          75% {
            transform: rotate(25deg);
          }
        }

        .snehal-wave-right {
          animation:
            snehalWaveRight
            1.1s
            ease-in-out;
        }

        /* ================================================
           ANTENNA
        ================================================ */

        @keyframes snehalAntennaPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.35);
          }
        }

        .snehal-antenna-pulse {
          animation:
            snehalAntennaPulse
            0.8s
            ease-in-out
            infinite;
        }

        /* ================================================
           HEART
        ================================================ */

        @keyframes snehalHeartPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.3);
          }
        }

        .snehal-heart-pulse {
          animation:
            snehalHeartPulse
            0.8s
            ease-in-out
            infinite;
        }

        /* ================================================
           GREETING
        ================================================ */

        @keyframes snehalGreeting {
          0% {
            opacity: 0;
            transform:
              translateY(7px)
              scale(0.97);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        .snehal-greeting {
          animation:
            snehalGreeting
            0.35s
            ease-out;
        }

        /* ================================================
           CHAT WINDOW
        ================================================ */

        @keyframes snehalChatOpen {
          0% {
            opacity: 0;
            transform:
              translateY(12px)
              scale(0.98);
          }

          100% {
            opacity: 1;
            transform:
              translateY(0)
              scale(1);
          }
        }

        .snehal-chat-window {
          animation:
            snehalChatOpen
            0.25s
            ease-out;
        }

        /* ================================================
           MESSAGE
        ================================================ */

        @keyframes snehalMessage {
          from {
            opacity: 0;
            transform: translateY(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .snehal-message {
          animation:
            snehalMessage
            0.22s
            ease-out;
        }

        /* ================================================
           TYPING
        ================================================ */

        @keyframes snehalTyping {
          0%,
          80%,
          100% {
            transform: translateY(0);
            opacity: 0.35;
          }

          40% {
            transform: translateY(-3px);
            opacity: 1;
          }
        }

        .snehal-typing-dot {
          animation:
            snehalTyping
            1.2s
            infinite
            ease-in-out;
        }

        .snehal-typing-dot:nth-child(2) {
          animation-delay: 0.15s;
        }

        .snehal-typing-dot:nth-child(3) {
          animation-delay: 0.3s;
        }

        /* ================================================
           MOBILE
        ================================================ */

        @media (max-width: 640px) {

          .snehal-chat-window {
            width:
              calc(100vw - 28px);

            right: -2px;

            bottom: 74px;

            height:
              min(
                500px,
                calc(100vh - 100px)
              );

            border-radius: 20px;
          }

        }

        /* ================================================
           REDUCED MOTION
        ================================================ */

        @media (prefers-reduced-motion: reduce) {

          .snehal-bot-float,
          .snehal-head,
          .snehal-body,
          .snehal-wave-left,
          .snehal-wave-right,
          .snehal-antenna-pulse,
          .snehal-heart-pulse,
          .snehal-greeting,
          .snehal-chat-window,
          .snehal-message,
          .snehal-typing-dot {
            animation: none !important;
          }

        }

      `}</style>

      {/* =====================================================
          MAIN FIXED AREA
      ===================================================== */}

      <div className="fixed bottom-5 right-5 z-[100] sm:bottom-6 sm:right-6">

        {/* ===================================================
            GREETING
        =================================================== */}

        {showGreeting && !isOpen && (
          <div className="snehal-greeting absolute bottom-[70px] right-0 w-[220px] sm:w-[235px]">

            <div className="rounded-xl border border-blue-100 bg-white px-3.5 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.14)]">

              <div className="flex items-center gap-2.5">

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Smile size={15} />
                </div>

                <div>
                  <p className="text-[12px] font-bold text-slate-900">
                    Namaste! 👋
                  </p>

                  <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
                    I'm Snehal Bot. How can I help?
                  </p>
                </div>

              </div>

              {/* pointer */}

              <div className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-b border-r border-blue-100 bg-white" />

            </div>

          </div>
        )}

        {/* ===================================================
            CHAT WINDOW
        =================================================== */}

        {isOpen && (
          <div className="snehal-chat-window absolute bottom-[74px] right-0 flex h-[500px] w-[360px] max-w-[calc(100vw-28px)] flex-col overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_20px_65px_rgba(15,23,42,0.18)] sm:bottom-[78px]">

            {/* =================================================
                HEADER
            ================================================= */}

            <div className="relative bg-white px-4 py-3.5 border-b border-slate-100">

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2.5">

                  <div className="relative h-[42px] w-[42px] flex items-center justify-center">
                    <SnehalBot
                      size="chat"
                      reaction={botReaction}
                    />
                  </div>

                  <div>

                    <div className="flex items-center gap-1.5">
                      <p className="text-[13px] font-bold text-slate-900">
                        Snehal Bot
                      </p>

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>

                    <p className="text-[10px] text-slate-400">
                      Snehal Foundation Assistant
                    </p>

                  </div>

                </div>

                <button
                  onClick={closeChat}
                  aria-label="Close Snehal Bot"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-all duration-200 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X size={17} />
                </button>

              </div>

            </div>

            {/* =================================================
                MESSAGES
            ================================================= */}

            <div className="flex-1 overflow-y-auto bg-slate-50/60 px-3.5 py-4">

              <div className="space-y-3">

                {messages.map((message) => (

                  <div
                    key={message.id}
                    className={`snehal-message flex ${
                      message.sender === "user"
                        ? "justify-end"
                        : "justify-start"
                    }`}
                  >

                    <div className="max-w-[84%]">

                      <div
                        className={`rounded-2xl px-3.5 py-2.5 text-[12px] leading-5 ${
                          message.sender === "user"
                            ? "rounded-br-md bg-blue-600 text-white"
                            : "rounded-bl-md border border-slate-100 bg-white text-slate-700 shadow-sm"
                        }`}
                      >
                        {message.text}
                      </div>

                      {/* ACTIONS */}

                      {message.sender === "bot" &&
                        message.actions?.length > 0 && (

                          <div className="mt-2 flex flex-wrap gap-1.5">

                            {message.actions.map(
                              (action, index) => (

                                <button
                                  key={`${action.label}-${index}`}
                                  onClick={() =>
                                    handleAction(
                                      action.path,
                                      action.path === "/donate"
                                        ? "donate"
                                        : action.path === "/volunteer"
                                        ? "volunteer"
                                        : "helpful"
                                    )
                                  }
                                  className="group inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-white px-2.5 py-1.5 text-[10px] font-semibold text-blue-700 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50"
                                >
                                  {action.icon}

                                  <span>
                                    {action.label}
                                  </span>

                                  <ArrowRight
                                    size={10}
                                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                                  />

                                </button>

                              )
                            )}

                          </div>

                        )}

                    </div>

                  </div>

                ))}

                {/* =================================================
                    TYPING
                ================================================= */}

                {isTyping && (

                  <div className="flex justify-start">

                    <div className="rounded-2xl rounded-bl-md border border-slate-100 bg-white px-3.5 py-2.5 shadow-sm">

                      <div className="flex items-center gap-1.5">

                        <span className="snehal-typing-dot h-1.5 w-1.5 rounded-full bg-blue-500" />

                        <span className="snehal-typing-dot h-1.5 w-1.5 rounded-full bg-blue-500" />

                        <span className="snehal-typing-dot h-1.5 w-1.5 rounded-full bg-blue-500" />

                      </div>

                    </div>

                  </div>

                )}

                <div ref={messagesEndRef} />

              </div>

            </div>

            {/* =================================================
                QUICK QUESTIONS
            ================================================= */}

            {!isTyping && (

              <div className="border-t border-slate-100 bg-white px-3 pt-2.5">

                <div className="mb-1.5 flex items-center gap-1 px-1">

                  <Sparkles
                    size={11}
                    className="text-blue-500"
                  />

                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-slate-400">
                    Quick questions
                  </span>

                </div>

                <div className="flex gap-1.5 overflow-x-auto pb-2">

                  {quickQuestions.map(
                    (question) => (

                      <button
                        key={question.label}
                        onClick={() =>
                          sendMessage(
                            question.label
                          )
                        }
                        className="flex shrink-0 items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[9px] font-semibold text-slate-600 transition-all hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                      >
                        {question.icon}
                        {question.label}
                      </button>

                    )
                  )}

                </div>

              </div>

            )}

            {/* =================================================
                INPUT
            ================================================= */}

            <div className="border-t border-slate-100 bg-white p-2.5">

              <div className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-2 py-1.5 focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50">

                <input
                  type="text"
                  value={input}
                  onChange={(e) =>
                    setInput(e.target.value)
                  }
                  onKeyDown={handleKeyDown}
                  placeholder="Ask Snehal Bot..."
                  disabled={isTyping}
                  className="min-w-0 flex-1 bg-transparent px-1.5 text-[11px] text-slate-700 outline-none placeholder:text-slate-400"
                />

                <button
                  onClick={() => sendMessage()}
                  disabled={
                    !input.trim() ||
                    isTyping
                  }
                  aria-label="Send message"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <Send size={13} />
                </button>

              </div>

              <p className="mt-1.5 text-center text-[8px] text-slate-400">
                Hope • Care • Empowerment
              </p>

            </div>

          </div>
        )}

        {/* ===================================================
            FLOATING MASCOT
            NO CIRCLE / NO BACKGROUND
        =================================================== */}

        {!isOpen && (

          <button
            onClick={openChat}
            aria-label="Open Snehal Bot"
            className="snehal-bot-float group relative flex items-end justify-center bg-transparent p-0 outline-none"
          >

            <span className="transition-transform duration-300 group-hover:-translate-y-1">

              <SnehalBot
                size="launcher"
                reaction={botReaction}
              />

            </span>

          </button>

        )}

      </div>
    </>
  );
};

export default Chatbot;