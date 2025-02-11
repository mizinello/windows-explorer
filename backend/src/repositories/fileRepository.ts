import { prisma } from "../utils/prisma";

export class FileRepository {
  static async createFile(name: string, folderId: number) {
    return prisma.file.create({
      data: { name, folderId },
    });
  }

  static async getFilesInFolder(folderId: number) {
    return prisma.file.findMany({
      where: { folderId },
    });
  }

  static async searchFiles(query: string) {
 return prisma.folder.findMany({
      where: {
        name: {
          contains: query.toLowerCase(),
        },
      },
    });
  }
}
