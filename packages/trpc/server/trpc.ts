import { initTRPC, TRPCError } from "@trpc/server";
import {
  TRPC_ERROR_CODE_KEY,
  TRPC_ERROR_CODES_BY_KEY,
} from "@trpc/server/rpc/index";
import { z } from "zod";

const t = initTRPC.create();

export const middleware = t.middleware;

const authenticatedMiddleware = middleware(async function (opts) {
  if (false) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return opts.next();
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const authenticatedProcedure = t.procedure.use(authenticatedMiddleware);
