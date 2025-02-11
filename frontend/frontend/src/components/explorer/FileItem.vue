<template>
  <div class="folder-item" :class="{ selected: isSelected }" @click="toggle">
    <span class="icon">{{ isOpen ? "📂" : "📁" }}</span>
    {{ folder.name }}
  </div>
  <div v-if="isOpen" class="subfolders">
    <FolderItem
      v-for="subfolder in folder.subfolders"
      :key="subfolder.id"
      :folder="subfolder"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useExplorerStore } from "../../stores/explorerStore";

const props = defineProps({ folder: Object });
const store = useExplorerStore();
const isSelected = computed(() => store.selectedFolderId === props.folder.id);
const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
  store.selectFolder(props.folder.id);
};
</script>

<style scoped>
.folder-item {
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.folder-item .icon {
  margin-right: 8px;
}

.folder-item.selected {
  background: #0078d7;
  color: white;
}

.subfolders {
  padding-left: 20px;
}
</style>
