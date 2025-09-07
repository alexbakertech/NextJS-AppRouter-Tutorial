// lib/prisma.ts
// This file is used to create a singleton instance of the Prisma client. See this page for docs: https://www.prisma.io/docs/orm/more/help-and-troubleshooting/nextjs-help#best-practices-for-using-prisma-client-in-development

// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


/*
 * The code below was provided by the prisma video I watched but gave the same error as the code from the link above, so its commented out for now.

import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => {
    return new PrismaClient();
};

declare const globalThis: {
    prismaGlobal: ReturnType<typeof PrismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? PrismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV != "production") globalThis.prismaGlobal = prisma;
*/