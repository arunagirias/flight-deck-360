const express = require("express");
const Flight = require("../models/Flight");
const auth = require("../middleware/auth");
const router = express.Router();

// Get all flights (public or authenticated)
router.get("/", async (req, res) => {
  const flights = await Flight.find();
  res.json(flights);
});

// Admin: Create flight
router.post("/", auth(["admin"]), async (req, res) => {
  const flight = await Flight.create(req.body);
  res.status(201).json(flight);
});