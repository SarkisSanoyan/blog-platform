const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/db");
const postsRoutes = require("./routes/posts");

const app = express();
const PORT = 8080;

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
connectToDatabase();

// Use the posts routes
app.use("/", postsRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
