import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { patientRouter } from "./routes/patients.router";
import { doctorRouter } from "./routes/doctors.router";
import { usersRouter } from "./routes/users.router";
import { adminRouter } from "./routes/admin.router";
import { bookingRouter } from "./routes/booking.router";

dotenv.config(); // run env configuration to use env files

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = Number(process.env.PORT);

// express app
const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/patients", patientRouter);

app.use("/api/doctors", doctorRouter);

app.use("/api/users", usersRouter);

app.use("/api/admin", adminRouter);

app.use("/api/bookings", bookingRouter);

app.listen(PORT, () => {
  console.log(`Listening from port: ${PORT}`);
});

export default app;
