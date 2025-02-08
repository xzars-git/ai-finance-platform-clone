import { currentUser } from "@clerk/nextjs/server";
import { db } from "./prisma";

export const checkUser = async () => {
  console.log("checkUser() called"); // Tambahkan log ini
  const user = await currentUser();

  if (!user) {
    console.log("No user found");
    return null;
  }

  console.log("User found:", user.id);

  try {
    const loggedInUser = await db.user.findUnique({
      where: {
        clerkUserId: user.id,
      },
    });

    if (loggedInUser) {
      console.log("User already exists in DB:", loggedInUser);
      return loggedInUser;
    }

    const name = `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim();

    console.log("Creating new user:", user.id);

    const newUser = await db.user.create({
      data: {
        clerkUserId: user.id,
        name,
        imageUrl: user.imageUrl,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    console.log("New user created:", newUser);
    return newUser;
  } catch (error) {
    console.error("Database error:", error.message);
  }
};
