// trpc hook for react
import { createTRPCReact } from "@payroll/trpc/client";
import type { AppRouter } from "@payroll/trpc/server";

export const trpc = createTRPCReact<AppRouter>();
