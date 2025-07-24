const express = require("express");
const Booking = require("../models/Booking");
const auth = require("../middleware/auth");
const router = express.Router();

// Book flight (Passenger)
router.post("/", auth(["passenger"]), async (req, res) => {
  const { flightId } = req.body;
  const booking = await Booking.create({ user: req.user.id, flight: flightId });
  res.status(201).json(booking);
});

// View own bookings
router.get("/my", auth(["passenger"]), async (req, res) => {
  const bookings = await Booking.find({ user: req.user.id }).populate("flight");
  res.json(bookings);
});