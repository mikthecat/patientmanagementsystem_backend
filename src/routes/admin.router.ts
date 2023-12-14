import express from "express";
import { adminLoginController } from "../controllers/admin.controller";

export const adminRouter = express.Router();

// ROUTE FOR ADMIN LOG IN
adminRouter.post("/", adminLoginController);
