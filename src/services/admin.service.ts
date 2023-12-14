import prisma from "../utils/db.server";

// ADMIN LOG IN FOR ADMINCONTROLLER
export const getAdmin = async (username: string, password: string) => {
  try {
    const admin = await prisma.admin.findUnique({
      where: {
        username,
      },
    });
    if (!admin) throw "Admin doesn't exist";

    if (password !== admin?.password) throw "Incorrect password";

    return admin;
  } catch (error) {
    throw error;
  }
};
