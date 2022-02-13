<template>
  <button
    type="button"
    class="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
    aria-controls="mobile-menu"
    aria-expanded="false"
    @click="closeModalAndUnselectUser"
  >
    <span class="sr-only">Open main menu</span>
    <svg
      :class="'block'"
      class="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</template>

<script setup lang="ts">
import useUI from '../../composables/useUI';
import useUser from '../../composables/useUser';
const { toggleModal } = useUI();
const { setActiveUser } = useUser()

const closeModalAndUnselectUser = () => {
  toggleModal();
  setActiveUser(undefined);
}

</script>