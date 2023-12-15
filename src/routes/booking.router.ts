import express from "express";
import {
  addBookingController,
  deleteBookingController,
  getBookingsController,
  getUserBookingsController,
  updateBookingController,
} from "../controllers/bookings.controller";

export const bookingRouter = express.Router();

// ROUTE FOR GETTING ALL BOOKINGS
bookingRouter.get("/", getBookingsController);

// ROUTE FOR GETTING BOOKINGS OF SPECIFIC USER
bookingRouter.get("/user-bookings/:id", getUserBookingsController);

// ROUTE FOR ADDING A BOOKING
bookingRouter.post("/", addBookingController);

// ROUTE FOR UPDATING A BOOKING VIA IDBOOKINGS
bookingRouter.patch("/:id", updateBookingController);

// ROUTE FOR DELETING A BOOKING VIA IDBOOKINGS
bookingRouter.delete("/:id", deleteBookingController);
