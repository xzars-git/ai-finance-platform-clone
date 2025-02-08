import { PrismaClient } from "@prisma/client";

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

//globalThis.prisma: this global variable ensures that the Prisma Client instance is
//reused across hot realoads during development, without this, each time ur apps reloads
//a new instance of the Prisma client would be created, potentially leading to connection issues.
