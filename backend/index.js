const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./Routes/userRouter");
const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
require("./Models/db");

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const AuthRouter = require("./Routes/AuthRouter");
app.use("/auth", AuthRouter);
app.use('/user', userRouter);

// Health check
app.get("/ping", (req, res) => res.send("PONG"));
app.get("/", (req, res) => res.send("🚀 Backend API is running!"));

// Start server
app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
