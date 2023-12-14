import express from "express";
import {
  addPatientController,
  deletePatientController,
  getPatientsController,
  searchDocPatientController,
  searchpatientController,
  updatePatientController,
} from "../controllers/patients.controller";

export const patientRouter = express.Router();

// ROUTE FOR GETTING ALL PATIENTS
patientRouter.get("/", getPatientsController);

// ROUTE FOR SEARCHING A PATIENT VIA PATIENT_NUMBER
patientRouter.get("/:id", searchpatientController);

// ROUTE FOR GETTING PATIENTS OF SPECIFIC DOCTOR
patientRouter.get("/doctor/:id", searchDocPatientController);

// ROUTE FOR ADDING A PATIENT
patientRouter.post("/", addPatientController);

// ROUTE FOR UPDATING A PATIENT VIA IDPATIENTS
patientRouter.patch("/:id", updatePatientController);

// ROUTE FOR DELETING A PATIENT VIA IDPATIENTS
patientRouter.delete("/:id", deletePatientController);
