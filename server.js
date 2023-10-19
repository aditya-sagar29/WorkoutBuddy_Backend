const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const dotenv = require("dotenv");
const cors = require("cors"); // Import the cors middleware

dotenv.config();

const app = express();

app.use(express.json());

// Configure CORS middleware before defining routes
app.use(cors());

app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

// Connect to the database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
