import { FolderRepository } from "../repositories/folderRepository";

export class FolderService {
  static async getFolders() {
    return FolderRepository.getAllFolders();
  }

  static async getSubfolders(folderId: number) {
    return FolderRepository.getSubfolders(folderId);
  }

  static async addFolder(name: string, parentId?: number) {
    return FolderRepository.createFolder(name, parentId);
  }

  static async search(query: string) {
    return FolderRepository.searchFolders(query);
  }
}
