<template>
    <div class="flex h-screen">
      <Sidebar />
      <FolderTree />
    </div>
  </template>
  
  <script setup>
  import Sidebar from "./Sidebar.vue";
  import FolderTree from './explorer/FolderTree.vue';
  </script>
  