<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div
    class="fixed z-10 inset-0 overflow-hidden"
    :class="(isModalActive && activeUser) ? 'block' : 'hidden'"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <!--
      Background overlay, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100"
        To: "opacity-0"
      -->
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <!--
      Modal panel, show/hide based on modal state.

      Entering: "ease-out duration-300"
        From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        To: "opacity-100 translate-y-0 sm:scale-100"
      Leaving: "ease-in duration-200"
        From: "opacity-100 translate-y-0 sm:scale-100"
        To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
      <div
        class="inline-block align-center rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full"
      >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="flex flex-col justify-center">
            <div class="flex justify-end">
              <modal-button />
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 text-center">
              <h3
                class="text-xl leading-6 text-aluxion-blue font-bold"
                id="modal-title"
              >Hey, {{ firstName }}</h3>
              <div class="mt-2 mb-4">
                <p
                  class="text-lg text-aluxion-blue text-center font-semibold"
                >¿Cúal es tu rumbo, aluxioner?</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 flex justify-center gap-4">
          <button
            type="button"
            class="inline-flex justify-center rounded-3xl border border-transparent shadow-sm px-4 py-2 bg-aluxion-blue text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          >Casa</button>
          <button
            type="button"
            class="inline-flex justify-center rounded-3xl border border-transparent shadow-sm px-4 py-2 bg-aluxion-blue text-base font-medium text-white sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >Aluxion</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ModalButton from './ModalButton.vue';
import useUI from '../../composables/useUI';
import useUser from '../../composables/useUser';
import { computed } from 'vue';
const { isModalActive } = useUI();
const { activeUser } = useUser();

const firstName = computed(() => activeUser.value ? activeUser.value.name.first : '')
</script>

<style scoped>
.bg-aluxion-blue {
  background-color: #081c53;
}

.text-aluxion-blue {
  color: #081c53;
}
</style>