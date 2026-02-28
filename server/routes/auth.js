import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { pool } from "../config/database.js"

const router = express.Router()

// Register
router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body

    if (!email || !password || !name) {
      return res.status(400).json({ error: "Missing required fields" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const connection = await pool.getConnection()
    await connection.execute("INSERT INTO users (email, password, name) VALUES (?, ?, ?)", [
      email,
      hashedPassword,
      name,
    ])
    connection.release()

    res.status(201).json({ message: "User registered successfully" })
  } catch (error) {
    console.error("Register error:", error)
    res.status(500).json({ error: error.message })
  }
})

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body

    const connection = await pool.getConnection()
    const [rows] = await connection.execute("SELECT * FROM users WHERE email = ?", [email])
    connection.release()

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    const user = rows[0]
    const validPassword = await bcrypt.compare(password, user.password)

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid credentials" })
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET || "your-secret-key",
      { expiresIn: "24h" },
    )

    res.json({ token, user: { id: user.id, email: user.email, name: user.name, role: user.role } })
  } catch (error) {
    console.error("Login error:", error)
    res.status(500).json({ error: error.message })
  }
})

export default router
