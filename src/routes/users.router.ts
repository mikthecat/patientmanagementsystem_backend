import express from "express";
import {
  deleteUserController,
  getUserController,
  getUsersController,
  registerUserController,
  updateUserController,
} from "../controllers/users.controller";

export const usersRouter = express.Router();

// ROUTE FOR REGISTERING A USER
usersRouter.post("/register", registerUserController);

// ROUTE FOR GETTING ALL USERS
usersRouter.get("/", getUsersController);

//ROUTE FOR LOGGING IN A USER
usersRouter.post("/login", getUserController);

// ROUTE FOR UPDATING A USER VIA ID
usersRouter.patch("/:id", updateUserController);

// ROUTE FOR DELETING A USER VIA ID
usersRouter.delete("/:id", deleteUserController);
