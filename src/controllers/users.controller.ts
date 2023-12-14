import { Request, Response } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  registerUser,
  updateUser,
} from "../services/users.service";
import { Users } from "../lib/types";

// USER REGISTER CONTROLLER
export const registerUserController = async (req: Request, res: Response) => {
  const body = req.body as Users;
  console.log(body);
  try {
    await registerUser(body);

    return res
      .status(201)
      .json({ ok: true, message: "User registered successfully" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// GET ALL USERS CONTROLLER
export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users = await getUsers();

    return res.status(200).json({ ok: true, users });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// USER LOGIN CONTROLLER
export const getUserController = async (req: Request, res: Response) => {
  const body = req.body as Users;

  const { email, password } = body;

  try {
    const user = await getUser(email, password);

    return res.status(200).json({ ok: true, user });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// UPDATE USER CONTROLLER
export const updateUserController = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.params;
  try {
    await updateUser(Number(id), body);
    return res
      .status(200)
      .json({ ok: true, message: "User updated successfully" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};

// DELETE USER CONTROLLER
export const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await deleteUser(Number(id));

    return res
      .status(200)
      .json({ ok: true, message: "User deleted successfully" });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};
