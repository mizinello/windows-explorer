<template>
  <div class="folder-item">
    <div class="folder-header" @click="toggle">
      <span class="folder-icon">{{ isOpen ? '📂' : '📁' }}</span>
      <span :class="{ 'active': isSelected }" @click.stop="selectFolder">{{ folder.name }}</span>
    </div>
    <div v-if="isOpen" class="subfolders">
      <FolderItem v-for="subfolder in folder.children" :key="subfolder.id" :folder="subfolder" @select="selectFolder" />
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({ folder: Object });
const emit = defineEmits(['select']);
const isOpen = ref(false);
const isSelected = ref(false);

const toggle = () => isOpen.value = !isOpen.value;
const selectFolder = () => {
  isSelected.value = true;
  emit('select', props.folder);
};
</script>

<style scoped>
.folder-item {
  padding: 5px;
  cursor: pointer;
}
.folder-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background 0.3s;
}
.folder-header:hover {
  background: #f0f0f0;
}
.folder-icon {
  font-size: 18px;
}
.active {
  font-weight: bold;
  color: #007bff;
}
.subfolders {
  margin-left: 20px;
  border-left: 2px solid #ddd;
  padding-left: 10px;
}
</style>
