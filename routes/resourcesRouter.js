const express = require("express");
const db = require("../models/resources");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const resources = await db.find();
    res.status(200).json(resources);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const resource = await db.findResourceById(req.params.id);
    res.status(200).json(resource);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resource = await db.add(req.body);
    res.status(201).json(resource);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
