const router = require("express").Router();
const db = require("../models");

router.get("/workouts", (req, res) => {
    db.Workout.find({}).then(workoutdata => {
        res.json(workoutdata);
    }).catch(err => {
        res.json(err);
    });
});

//getLastWorkout() api/workouts
//addExercise() api/workouts
//createWorkout() api/workouts
//getWorkoutsInRange() api/workouts/range

module.exports = router;