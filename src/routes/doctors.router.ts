import express from "express";
import {
  addDoctorController,
  deleteDoctorController,
  getDoctorsController,
  loginController,
  updateDoctorController,
} from "../controllers/doctors.controller";

export const doctorRouter = express.Router();

// ROUTE FOR GETTING ALL DOCTORS
doctorRouter.get("/", getDoctorsController);

// ROUTE FOR ADDING A DOCTOR
doctorRouter.post("/", addDoctorController);

// ROUTE FOR LOGGING IN AS A DOCTOR
doctorRouter.post("/login", loginController);

// ROUTE FOR UPDATING A DOCTOR VIA IDDOCTORS
doctorRouter.patch("/:id", updateDoctorController);

// ROUTE FOR DELETING A DOCTOR VIA IDDOCTORS
doctorRouter.delete("/:id", deleteDoctorController);
