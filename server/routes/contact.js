import express from "express"
import { pool } from "../config/database.js"
import { sendEmail } from "../services/email.js"
import { verifyToken, isAdmin } from "../middleware/auth.js"

const router = express.Router()

// Submit contact form
router.post("/", async (req, res) => {
  try {
    const { name, email, subject, message, phone } = req.body

    const connection = await pool.getConnection()
    const [result] = await connection.execute(
      "INSERT INTO contacts (name, email, subject, message, phone) VALUES (?, ?, ?, ?, ?)",
      [name, email, subject, message, phone],
    )
    connection.release()

    // Send email notification
    await sendEmail({
      to: process.env.ADMIN_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    })

    res.status(201).json({ message: "Message sent successfully" })
  } catch (error) {
    console.error("Contact error:", error)
    res.status(500).json({ error: error.message })
  }
})

// Get all contacts (admin only)
router.get("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const connection = await pool.getConnection()
    const [contacts] = await connection.execute("SELECT * FROM contacts ORDER BY created_at DESC")
    connection.release()
    res.json(contacts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
