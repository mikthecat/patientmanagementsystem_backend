import { Users } from "../lib/types";
import prisma from "../utils/db.server";

// REGISTEER A USER // ADDING A USER
export const registerUser = async (data: Users) => {
  try {
    const existingUser = await prisma.users.findUnique({
      where: {
        email: data.email,
      },
    });

    if (existingUser) throw "Email already exists";

    const res = await prisma.users.create({
      data,
    });

    return res;
  } catch (error) {
    throw error;
  }
};

// GET ALL USERS
export const getUsers = async () => {
  try {
    const users = await prisma.users.findMany();
    return users;
  } catch (error) {
    throw error;
  }
};

// GET USER // LOGIN A USER
export const getUser = async (email: string, password: string) => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        email,
      },
      include: {
        bookings: true,
      },
    });

    if (!user) throw "User does't exist";

    if (password !== user.password) throw "Incorrect password";

    return user;
  } catch (error) {
    throw error;
  }
};

// UPDATE A USER
export const updateUser = async (id: number, data: Users) => {
  try {
    const res = await prisma.users.update({
      where: {
        idusers: id,
      },
      data,
    });
    return res;
  } catch (error) {
    throw error;
  }
};

// DELETE A USER
export const deleteUser = async (id: number) => {
  try {
    const res = await prisma.users.delete({
      where: {
        idusers: id,
      },
    });

    return res;
  } catch (error) {
    throw error;
  }
};
