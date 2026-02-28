import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.js"
import eventRoutes from "./routes/events.js"
import galleryRoutes from "./routes/gallery.js"
import contactRoutes from "./routes/contact.js"
import userRoutes from "./routes/users.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
)
app.use(express.json())
app.use(express.urlencoded({ limit: "50mb", extended: true }))

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" })
})

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/events", eventRoutes)
app.use("/api/gallery", galleryRoutes)
app.use("/api/contact", contactRoutes)
app.use("/api/users", userRoutes)

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: "Internal server error" })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`API available at http://localhost:${PORT}`)
})
