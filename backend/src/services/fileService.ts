import { FileRepository } from "../repositories/fileRepository";

export class FileService {
  static async addFile(name: string, folderId: number) {
    return FileRepository.createFile(name, folderId);
  }

  static async listFiles(folderId: number) {
    return FileRepository.getFilesInFolder(folderId);
  }

  static async search(query: string) {
    const files = await FileRepository.searchFiles(query);
    return files;
  }
}
