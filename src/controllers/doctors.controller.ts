import { Request, Response } from "express";
import {
  addDoctor,
  deleteDoctor,
  getDoctors,
  getDoctor,
  updateDoctor,
} from "../services/doctors.service";

// DOCTOR LOG IN
export const loginController = async (req: Request, res: Response) => {
  const body = req.body;
  const { username, password } = body;
  try {
    const doctor = await getDoctor(username, password);

    return res.status(200).json({ ok: true, doctor });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// GET ALL DOCTORS CONTROLLER
export const getDoctorsController = async (req: Request, res: Response) => {
  try {
    const doctors = await getDoctors();

    return res.status(200).json({ ok: true, doctors });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// ADD A DOCTOR CONTROLLER
export const addDoctorController = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    await addDoctor(body);
    return res.status(201).json({ ok: true, message: "Doctor added" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// UPDATE A DOCTOR CONTROLLER
export const updateDoctorController = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.params;
  try {
    await updateDoctor(Number(id), body);
    return res.status(200).json({ ok: true, message: "Doctor updated" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// DELETE A DOCTOR CONTROLLER
export const deleteDoctorController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await deleteDoctor(Number(id));
    return res.status(200).json({ ok: true, message: "Doctor deleted" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};
