import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { folderRoutes } from "./routes/folderRoutes";
import { fileRoutes } from "./routes/fileRoutes";

export const app = new Elysia()
  .use(cors())
  .use(folderRoutes)
  .use(fileRoutes)
  .get("/", () => "API is working!");

if (import.meta.main) {
  app.listen(3000);
  console.log("🚀 Server running at http://localhost:3000");
}