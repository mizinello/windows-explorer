import { defineStore } from "pinia";
import { ref } from "vue";

export const useExplorerStore = defineStore("explorer", () => {
  const folders = ref([]);
  const files = ref([]);
  const selectedFolderId = ref(null);

  const fetchFolders = async () => {
    try {
      const response = await fetch("http://localhost:3000/folders");
      if (!response.ok) throw new Error("Failed to fetch folders");
      folders.value = await response.json();
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };

  const fetchFiles = async (folderId: number) => {
    try {
      const response = await fetch(`http://localhost:3000/files/${folderId}`);
      if (!response.ok) throw new Error("Failed to fetch files");
      files.value = await response.json();
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };

  const selectFolder = (folderId: number) => {
    selectedFolderId.value = folderId;
    fetchFiles(folderId);
  };

  return { folders, files, selectedFolderId, fetchFolders, selectFolder };
});
