import { Patients } from "../lib/types";
import prisma from "../utils/db.server";

// GET ALL PATIENTS
export const getPatients = async () => {
  try {
    const res = await prisma.patients.findMany({
      include: {
        doctors: true,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// SEARCH PATIENT VIA PATIENT_NUMBER
export const searchPatient = async (patient_number: number) => {
  try {
    const patients = await prisma.patients.findUnique({
      where: {
        patient_number,
      },
      include: {
        doctors: true,
      },
    });

    if (!patients) throw `No results for patient number ${patient_number}`;

    return patients;
  } catch (error) {
    throw error;
  }
};

// SEARCH PATIENT VIA DOCTOR_ID
export const searchDocPatients = async (doctor: number) => {
  try {
    const patients = await prisma.patients.findMany({
      where: {
        doctor,
      },
      include: {
        doctors: true,
      },
    });

    if (!patients)
      throw `No results for patients that has doctor_id: ${doctor}`;

    return patients;
  } catch (error) {
    throw error;
  }
};

// ADD A PAITENT
export const addPatient = async (data: Patients) => {
  const {
    name,
    age,
    sex,
    patient_number,
    appointment,
    admission_date,
    discharged_date,
  } = data;
  console.log(data);
  try {
    const res = await prisma.patients.create({
      data: {
        name,
        age,
        sex,
        patient_number,
        appointment,
        admission_date,
        discharged_date,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// UPDATE PATIENT
export const updatePatient = async (id: number, data: Patients) => {
  console.log(data);
  const {
    name,
    age,
    sex,
    patient_number,
    appointment,
    doctor,
    admission_date,
    discharged_date,
  } = data;

  try {
    const res = await prisma.patients.update({
      where: {
        idpatients: id,
      },
      data: {
        name,
        age,
        sex,
        patient_number,
        appointment,
        doctor,
        admission_date,
        discharged_date,
      },
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// DELETE PATIENT
export const deletePatient = async (id: number) => {
  try {
    const res = await prisma.patients.delete({
      where: {
        idpatients: id,
      },
    });

    return res;
  } catch (error) {
    throw error;
  }
};
