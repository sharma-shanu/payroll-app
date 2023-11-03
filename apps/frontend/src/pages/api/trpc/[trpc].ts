import { createNextApiHandler } from "@payroll/trpc/server/adapters";
import { appRouter as router } from "@payroll/trpc/server";

export default createNextApiHandler({ router });

// set up and add sst
