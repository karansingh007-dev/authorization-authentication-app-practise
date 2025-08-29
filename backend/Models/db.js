const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_CONN;

if (!mongo_url) {
  console.warn("⚠️ MONGO_CONN is missing in .env");
} else {
  mongoose
    .connect(mongo_url)
    .then(() => console.log("✅ MongoDB Connected Successfully!"))
    .catch((err) => {
      console.error("❌ MongoDB Connection Error:", err.message);
      console.warn("⚠️ Server is still running, but DB features won’t work.");
    });
}
