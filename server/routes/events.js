import express from "express"
import { pool } from "../config/database.js"
import { verifyToken, isAdmin } from "../middleware/auth.js"

const router = express.Router()

// Get all events
router.get("/", async (req, res) => {
  try {
    const connection = await pool.getConnection()
    const [events] = await connection.execute("SELECT * FROM events ORDER BY date DESC")
    connection.release()
    res.json(events)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create event (admin only)
router.post("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const { title, description, date, location, image_url } = req.body

    const connection = await pool.getConnection()
    await connection.execute(
      "INSERT INTO events (title, description, date, location, image_url, created_by) VALUES (?, ?, ?, ?, ?, ?)",
      [title, description, date, location, image_url, req.userId],
    )
    connection.release()

    res.status(201).json({ message: "Event created successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update event (admin only)
router.put("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, date, location, image_url } = req.body

    const connection = await pool.getConnection()
    await connection.execute(
      "UPDATE events SET title = ?, description = ?, date = ?, location = ?, image_url = ? WHERE id = ?",
      [title, description, date, location, image_url, id],
    )
    connection.release()

    res.json({ message: "Event updated successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete event (admin only)
router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const { id } = req.params

    const connection = await pool.getConnection()
    await connection.execute("DELETE FROM events WHERE id = ?", [id])
    connection.release()

    res.json({ message: "Event deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
