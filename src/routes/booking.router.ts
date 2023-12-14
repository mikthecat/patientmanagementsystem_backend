import express from "express";
import {
  addBookingController,
  deleteBookingController,
  getBookingsController,
  updateBookingController,
} from "../controllers/bookings.controller";

export const bookingRouter = express.Router();

// ROUTE FOR GETTING ALL BOOKINGS
bookingRouter.get("/", getBookingsController);

// ROUTE FOR ADDING A BOOKING
bookingRouter.post("/", addBookingController);

// ROUTE FOR UPDATING A BOOKING VIA IDBOOKINGS
bookingRouter.patch("/:id", updateBookingController);

// ROUTE FOR DELETING A BOOKING VIA IDBOOKINGS
bookingRouter.delete("/:id", deleteBookingController);
