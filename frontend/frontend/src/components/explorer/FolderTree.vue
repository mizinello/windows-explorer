<template>
  <div class="folder-tree">
    <h2>Folders</h2>
    <ul>
      <li
        v-for="folder in store.folders"
        :key="folder.id"
        :class="{ selected: store.selectedFolderId === folder.id }"
        @click="store.selectFolder(folder.id)"
      >
        📁 {{ folder.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useExplorerStore } from "../../stores/explorerStore";

const store = useExplorerStore();

onMounted(() => {
  store.fetchFolders();
});
</script>

<style scoped>
.folder-tree {
  width: 200px;
  padding: 10px;
  background-color: #f4f4f4;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 5px;
  cursor: pointer;
}
li.selected {
  background-color: #ddd;
}
</style>
