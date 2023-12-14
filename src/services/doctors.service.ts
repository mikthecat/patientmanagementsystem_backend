import { Doctors } from "../lib/types";
import prisma from "../utils/db.server";

// GET ALL DOCTORS
export const getDoctors = async () => {
  try {
    const res = await prisma.doctors.findMany();
    return res;
  } catch (error) {
    throw error;
  }
};

// GET ONE DOCTOR / DOCTOR LOGIN
export const getDoctor = async (username: string, password: string) => {
  try {
    const doctor = await prisma.doctors.findUnique({
      where: {
        username,
      },
      include: {
        patients: true,
      },
    });

    if (!doctor) throw "Doctor doesn't exist";

    if (password !== doctor.password) throw "Incorrect password";

    return doctor;
  } catch (error) {
    throw error;
  }
};

// ADD A DOCTOR
export const addDoctor = async (data: Doctors) => {
  try {
    const res = await prisma.doctors.create({
      data,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// UPDATE A DOCTOR
export const updateDoctor = async (id: number, data: Doctors) => {
  try {
    const res = await prisma.doctors.update({
      where: {
        iddoctors: id,
      },
      data,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// DELETE A DOCTOR
export const deleteDoctor = async (id: number) => {
  try {
    const res = await prisma.doctors.delete({
      where: {
        iddoctors: id,
      },
    });

    return res;
  } catch (error) {
    throw error;
  }
};
