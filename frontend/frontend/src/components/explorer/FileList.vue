<template>
  <div class="file-list">
    <h2>Sub Folders</h2>
    <div v-if="store.files.length > 0">
      <div v-for="file in store.files" :key="file.id" class="file-item">
        📂 {{ file.name }}
      </div>
    </div>
    <p v-else></p>
  </div>
</template>

<script setup>
import { useExplorerStore } from "../../stores/explorerStore";

const store = useExplorerStore();
</script>

<style scoped>
.file-list {
  flex: 1;
  padding: 10px;
  background-color: white;
}
.file-item {
  padding: 5px;
}
</style>
