import { Request, Response } from "express";
import {
  addBooking,
  deleteBooking,
  getBookings,
  updateBooking,
} from "../services/bookings.service";

// GET ALL BOOKINGS
export const getBookingsController = async (req: Request, res: Response) => {
  try {
    const bookings = await getBookings();

    return res.status(200).json({ ok: true, bookings });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// ADD BOOKING
export const addBookingController = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    await addBooking(body);

    return res.status(201).json({ ok: true, message: "Booking added" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// UPDATE BOOKING
export const updateBookingController = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.params;
  try {
    await updateBooking(Number(id), body);

    return res.status(200).json({ ok: true, message: "Booking updated" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// DELETE BOOKING
export const deleteBookingController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await deleteBooking(Number(id));

    return res.status(200).json({ ok: true, message: "Booking deleted" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};
