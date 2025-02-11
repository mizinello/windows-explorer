import { Context } from "elysia";

export const errorHandler = (ctx: Context, error: Error) => {
  return { error: error.message };
};
