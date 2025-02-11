<template>
  <aside class="sidebar">
    <h3>📁 Folders</h3>
    <FolderTree :folders="folders" @folderSelected="selectFolder" />
  </aside>
</template>

<script setup>
import { ref } from 'vue';
import FolderTree from '@/components/explorer/FolderTree.vue';

const folders = ref([
  { id: 1, name: 'My First Folder', children: [], files: ['file1.txt', 'image.png'] },
  { id: 2, name: 'Test Folder', children: [], files: ['notes.docx'] }
]);

const selectFolder = (files) => {
  console.log('Selected files:', files);
};
</script>

<style>
.sidebar {
  width: 250px;
  background: #e3e3e3;
  padding: 1rem;
  border-right: 2px solid #ccc;
}
</style>
