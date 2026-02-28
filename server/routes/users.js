import express from "express"
import { pool } from "../config/database.js"
import { verifyToken, isAdmin } from "../middleware/auth.js"

const router = express.Router()

// Get all users (admin only)
router.get("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const connection = await pool.getConnection()
    const [users] = await connection.execute("SELECT id, email, name, role, created_at FROM users")
    connection.release()
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
