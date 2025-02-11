<template>
  <div class="explorer-page">
    <FolderTree />
    <FileList />
  </div>
</template>

<script setup>
import FolderTree from "../components/explorer/FolderTree.vue";
import FileList from "../components/explorer/FileList.vue";
</script>

<style scoped>
.explorer-page {
  display: flex;
  height: 100vh;
  background-color: #eaeaea;
}
</style>
