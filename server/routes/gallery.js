import express from "express"
import { pool } from "../config/database.js"
import { verifyToken, isAdmin } from "../middleware/auth.js"

const router = express.Router()

// Get all gallery images
router.get("/", async (req, res) => {
  try {
    const connection = await pool.getConnection()
    const [images] = await connection.execute("SELECT * FROM gallery ORDER BY created_at DESC")
    connection.release()
    res.json(images)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Upload gallery image (admin only)
router.post("/upload", verifyToken, isAdmin, async (req, res) => {
  try {
    const { title, description, image_url } = req.body

    const connection = await pool.getConnection()
    await connection.execute("INSERT INTO gallery (title, description, image_url, uploaded_by) VALUES (?, ?, ?, ?)", [
      title,
      description,
      image_url,
      req.userId,
    ])
    connection.release()

    res.status(201).json({ message: "Image uploaded successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Delete gallery image (admin only)
router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const { id } = req.params

    const connection = await pool.getConnection()
    await connection.execute("DELETE FROM gallery WHERE id = ?", [id])
    connection.release()

    res.json({ message: "Image deleted successfully" })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
