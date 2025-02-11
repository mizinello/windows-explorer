import { prisma } from "../utils/prisma";

export class FolderRepository {
  static async getAllFolders() {
    return prisma.folder.findMany({
      include: { children: true },
    });
  }

  static async getSubfolders(folderId: number) {
    return prisma.folder.findMany({
      where: { parentId: folderId },
    });
  }

  static async createFolder(name: string, parentId?: number) {
    return prisma.folder.create({
      data: { name, parentId },
    });
  }

  static async searchFolders(query: string) {
    return prisma.folder.findMany({
      where: {
        name: {
          contains: query.toLowerCase(),
        },
      },
    });
  }
}
