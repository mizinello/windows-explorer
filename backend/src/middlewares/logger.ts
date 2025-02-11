export const logger = (ctx: any, next: any) => {
    console.log(`[${new Date().toISOString()}] ${ctx.request.method} ${ctx.request.url}`);
    return next();
  };
  