<template>
  <button
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-md"
    @click="toggleGridView"
  >
    <svg
      viewBox="0 0 16 16"
      class="h-5 w-5"
      :class="isGridViewActive ? 'text-white' : 'text-gray-400'"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <rect width="6.73684" height="6.73684" rx="1" />
      <rect x="9.26318" width="6.73684" height="6.73684" rx="1" />
      <rect y="9.26318" width="6.73684" height="6.73684" rx="1" />
      <rect x="9.26318" y="9.26318" width="6.73684" height="6.73684" rx="1" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useUI } from '../../composables';
const { isGridViewActive, toggleGridView } = useUI();
</script>
