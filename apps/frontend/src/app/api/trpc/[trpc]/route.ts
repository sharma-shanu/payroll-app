"use client";
import { fetchRequestHandler } from "@payroll/trpc/server/adapters";

import { appRouter } from "@payroll/trpc/server";

const handler = (req: Request) =>
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => ({}),
  });

export { handler as GET, handler as POST };
