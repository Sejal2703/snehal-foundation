const express = require("express");
const ContactMessage = require("../Models/ContactMessage");
const adminAuth = require("../middleware/adminAuth");

const {
  sendContactNotification,
} = require("../utils/email");

const router = express.Router();

/* =====================================================
   POST CONTACT MESSAGE
   Public route
===================================================== */
router.post("/", async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: "Please enter a valid email address.",
      });
    }

    const contactMessage =
      await ContactMessage.create({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        subject: subject.trim(),
        message: message.trim(),
      });

      try {
  await sendContactNotification({
    name: name.trim(),
    email: email.trim().toLowerCase(),
    subject: subject.trim(),
    message: message.trim(),
  });
} catch (emailError) {
  console.error(
    "Email notification failed:",
    emailError
  );
}

    return res.status(201).json({
      message: "Your message has been sent successfully.",
      data: contactMessage,
    });

  } catch (error) {
    console.error("Contact message error:", error);

    return res.status(500).json({
      message: "Unable to send your message.",
    });
  }
});


/* =====================================================
   GET ALL CONTACT MESSAGES
   Admin only
===================================================== */
router.get("/", adminAuth, async (req, res) => {
  try {
    const messages = await ContactMessage.find()
      .sort({ date: -1 });

    res.status(200).json(messages);

  } catch (error) {
    console.error("Fetch contact messages error:", error);

    res.status(500).json({
      message: "Unable to fetch contact messages.",
    });
  }
});


/* =====================================================
   MARK MESSAGE READ / UNREAD
   Admin only
===================================================== */
router.put("/:id/read", adminAuth, async (req, res) => {
  try {
    const { isRead } = req.body;

    const message =
      await ContactMessage.findByIdAndUpdate(
        req.params.id,
        { isRead: Boolean(isRead) },
        { new: true, runValidators: true }
      );

    if (!message) {
      return res.status(404).json({
        message: "Message not found.",
      });
    }

    res.status(200).json({
      message: "Message status updated.",
      data: message,
    });

  } catch (error) {
    console.error("Update message status error:", error);

    res.status(500).json({
      message: "Unable to update message status.",
    });
  }
});


/* =====================================================
   DELETE CONTACT MESSAGE
   Admin only
===================================================== */
router.delete("/:id", adminAuth, async (req, res) => {
  try {
    const message =
      await ContactMessage.findByIdAndDelete(
        req.params.id
      );

    if (!message) {
      return res.status(404).json({
        message: "Message not found.",
      });
    }

    res.status(200).json({
      message: "Message deleted successfully.",
    });

  } catch (error) {
    console.error("Delete contact message error:", error);

    res.status(500).json({
      message: "Unable to delete message.",
    });
  }
});


module.exports = router;