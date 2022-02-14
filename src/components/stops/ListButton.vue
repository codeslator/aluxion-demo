
<template>
  <button
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-md"
    :class="isListViewActive ? 'text-white' : 'text-gray-400'"
    @click="toggleListView"
  >
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      class="h-5 w-5"
      fill="currentColor"
    >
      <rect width="16" height="6.73684" rx="1" />
      <rect y="9.26318" width="16" height="6.73684" rx="1" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { useUI } from '../../composables';
const { isListViewActive, toggleListView } = useUI();
</script>