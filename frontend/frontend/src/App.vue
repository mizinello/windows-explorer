<template>
  <div class="app-container">
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>

<style>
.app-container {
  display: flex;
  height: 100vh;
}

.main-content {
  flex-grow: 1;
  background: #f5f5f5;
  padding: 1rem;
}
</style>
