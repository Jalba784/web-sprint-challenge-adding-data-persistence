const express = require("express");
const db = require("../models/projects");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const projects = await db.find();
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const project = await db.findById(req.params.id);
    res.status(200).json(project);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/:id/resources", async (req, res, next) => {
  try {
    const projectResources = await db.findProjectResources(req.params.id);
    res.status(200).json(projectResources);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/:id/tasks", async (req, res, next) => {
  try {
    const projectTasks = await db.findProjectTasks(req.params.id);
    res.status(200).json(projectTasks);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const project = await db.add(req.body);
    res.status(201).json(project);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
