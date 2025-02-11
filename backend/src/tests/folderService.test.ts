import { describe, it, expect } from "vitest";
import { FolderService } from "../services/folderService";

describe("FolderService", () => {
  it("should add a folder", async () => {
    const folder = await FolderService.addFolder("Test Folder", null);
    expect(folder).toHaveProperty("id");
    expect(folder.name).toBe("Test Folder");
  });

  it("should fetch all folders", async () => {
    const folders = await FolderService.getFolders();
    expect(Array.isArray(folders)).toBe(true);
  });
});
