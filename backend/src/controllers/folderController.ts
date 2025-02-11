import { FolderService } from "../services/folderService";
import { Context } from "elysia";

export const FolderController = {
  async getAll(ctx: Context) {
    return await FolderService.getFolders();
  },

  async getById(ctx: Context) {
    const id = parseInt(ctx.params.id);
    return await FolderService.getSubfolders(id);
  },

  async create(ctx: Context) {
    const { name, parentId } = await ctx.request.json();
    return await FolderService.addFolder(name, parentId);
  },
};
