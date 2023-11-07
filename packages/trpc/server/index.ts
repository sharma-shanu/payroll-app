import { router, publicProcedure, authenticatedProcedure } from "./trpc";
import { z } from "zod";

export const appRouter = router({
  health: publicProcedure.query(async (opts) => {
    return "Healthy";
  }),
  signup: publicProcedure
    .input(z.object({ email: z.string(), password: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      // some prisma task to talk to the backend
      return {
        code: "SUCCESS",
        user: {
          username: input.email,
        },
      };
    }),
});

export type AppRouter = typeof appRouter;
