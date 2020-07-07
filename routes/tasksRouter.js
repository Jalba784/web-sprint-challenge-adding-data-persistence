const express = require("express");
const db = require("../models/tasks");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const tasks = await db.find();
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const task = await db.findTaskById(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const task = await db.add(req.body);
    res.status(201).json(task);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
