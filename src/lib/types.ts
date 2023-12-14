export type Doctors = {
  iddoctors: number;
  name: string;
  age: number;
  sex: string;
  specialist: string;
  date_hired: string;
};

export type Patients = {
  idpatients: number;
  name: string;
  age: number;
  sex: string;
  appointment: string;
  patient_number: number;
  doctor: number;
  admission_date: string;
  discharged_date: string;
};

export type Users = {
  idusers: number;
  username: string;
  email: string;
  password: string;
};

export type Admin = {
  idadmin: number;
  username: string;
  password: string;
};

export type Booking = {
  idbookings: number;
  booker_id: number;
  patient_name: string;
  patient_age: number;
  patient_sex: string;
  appointment: string;
  is_confirmed: number;
  created_at: string;
  booking_date: string;
};
