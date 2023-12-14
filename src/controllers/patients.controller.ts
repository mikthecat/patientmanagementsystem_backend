import { Request, Response } from "express";
import {
  addPatient,
  deletePatient,
  getPatients,
  searchDocPatients,
  searchPatient,
  updatePatient,
} from "../services/patients.service";

// GET ALL PATIENTS CONTROLLER
export const getPatientsController = async (req: Request, res: Response) => {
  try {
    const patients = await getPatients();

    return res.status(200).json({ ok: true, patients });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// SEARCH A PATIENT VIA PATIENT NUMBER
export const searchpatientController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const patient = await searchPatient(Number(id));

    return res.status(200).json({ ok: true, patient });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// GET PATIENTS OF A SPECIFIC DOCTOR
export const searchDocPatientController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const patients = await searchDocPatients(Number(id));

    return res.status(200).json({ ok: true, patients });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// ADD PATIENT CONTROLLER
export const addPatientController = async (req: Request, res: Response) => {
  const body = req.body;
  try {
    await addPatient(body);
    return res.status(201).json({ ok: true, message: "Patient added" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// UPDATE PATIENT CONTROLLER
export const updatePatientController = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.params;
  try {
    await updatePatient(Number(id), body);
    return res.status(200).json({ ok: true, message: "Patient updated" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// DELETE PATIENT CONTROLLER
export const deletePatientController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await deletePatient(Number(id));
    return res.status(200).json({ ok: true, message: "Patient deleted" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};
