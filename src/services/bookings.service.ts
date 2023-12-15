import { Booking } from "../lib/types";
import prisma from "../utils/db.server";

// GET ALL BOOKINGS
export const getBookings = async () => {
  try {
    const bookings = await prisma.bookings.findMany();
    return bookings;
  } catch (error) {
    throw error;
  }
};

//  GET ALL BOOKINGS OF A SPECIFIC USER
export const getUserBookings = async (booker_id: number) => {
  try {
    const bookings = await prisma.bookings.findMany({
      where: {
        booker_id,
      },
    });

    return bookings;
  } catch (error) {
    throw error;
  }
};

// ADD BOOKING
export const addBooking = async (data: Booking) => {
  data.created_at = new Date().toISOString();
  console.log(data);
  try {
    const booking = await prisma.bookings.create({
      data,
    });

    return booking;
  } catch (error) {
    throw error;
  }
};

// UPDATE BOOKING
export const updateBooking = async (id: number, data: Booking) => {
  try {
    const booking = await prisma.bookings.update({
      where: {
        idbookings: id,
      },
      data,
    });

    return booking;
  } catch (error) {
    throw error;
  }
};

// DELETE BOOKING
export const deleteBooking = async (id: number) => {
  try {
    const booking = await prisma.bookings.delete({
      where: {
        idbookings: id,
      },
    });
    return booking;
  } catch (error) {
    throw error;
  }
};
