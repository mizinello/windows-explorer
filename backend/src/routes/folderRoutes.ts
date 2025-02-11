import { Elysia } from "elysia";
import { FolderService } from "../services/folderService";

export const folderRoutes = new Elysia()
  .get("/folders", async () => FolderService.getFolders())
  .get("/folders/:id", async ({ params }) => FolderService.getSubfolders(Number(params.id)))
  .post("/folders", async ({ body }) => FolderService.addFolder(body.name, body.parentId))
  .get("/search", async ({ query }) => FolderService.search(query.q));
