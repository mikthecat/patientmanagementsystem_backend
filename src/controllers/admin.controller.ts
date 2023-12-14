import { Request, Response } from "express";
import { getAdmin } from "../services/admin.service";

// ADMIN LOG IN
export const adminLoginController = async (req: Request, res: Response) => {
  const body = req.body;
  const { username, password } = body;
  try {
    const admin = await getAdmin(username, password);

    return res.status(200).json({ ok: true, admin });
  } catch (error) {
    return res.status(500).json({ ok: false, error });
  }
};
