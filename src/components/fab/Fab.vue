<template>
  <button
    type="button"
    class="md:hidden fixed bottom-0 right-0 z-[99999] mr-5 mb-5 inline-flex items-center justify-center p-3 rounded-full bg-white text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
  >
    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M15,19L9,16.89V5L15,7.11M20.5,3C20.44,3 20.39,3 20.34,3L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21C3.55,21 3.61,21 3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3Z"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import useStop from '../../composables/useStop';

const { isStopReady } = useStop();

</script>