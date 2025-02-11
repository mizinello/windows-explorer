import { Elysia } from "elysia";
import { FileService } from "../services/fileService";

export const fileRoutes = new Elysia()
  .post("/files", async ({ body }) => FileService.addFile(body.name, body.folderId))
  .get("/files/:folderId", async ({ params }) => FileService.listFiles(Number(params.folderId)));
