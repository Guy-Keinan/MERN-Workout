const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workout");

const PORT = 4000;
const MONGO_URI =
  "mongodb+srv://giggity:110991@cluster0.n7jjr.mongodb.net/?retryWrites=true&w=majority";

const app = express();

app.use(express.json());

app.use("/api/workouts", workoutRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log("connected to DB and listening on port:", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
