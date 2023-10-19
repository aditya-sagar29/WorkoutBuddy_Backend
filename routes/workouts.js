const express = require("express");
const {
  getWorkout,
  getWorkouts,
  createWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");
const requireAuth = require('../middleware/requireAuth')

const router = express.Router();

//require auth for all workout routes
router.use(requireAuth)

//all workouts
router.get("/", getWorkouts);

//single workout
router.get("/:id", getWorkout);

//post a new workout
router.post("/", createWorkout);

//delete workout
router.delete("/:id", deleteWorkout);

//update
router.patch("/:id", updateWorkout);

module.exports = router;
