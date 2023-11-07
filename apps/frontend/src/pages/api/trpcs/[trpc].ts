import { createNextApiHandler } from "@payroll/trpc/server/adapters";
import { AppRouter, appRouter as router } from "@payroll/trpc/server";

export default createNextApiHandler<AppRouter>({
  router,
  createContext: () => ({}),
});

// set up and add sst
