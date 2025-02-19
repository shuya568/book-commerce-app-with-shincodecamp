import { PrismaClient } from "@prisma/client";

// let prisma: PrismaClient;

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// if (!globalForPrisma.prisma) {
//   globalForPrisma.prisma = new PrismaClient();
// }

// prisma = globalForPrisma.prisma;

const prisma =
  globalForPrisma.prisma ?? (globalForPrisma.prisma = new PrismaClient());

export default prisma;
