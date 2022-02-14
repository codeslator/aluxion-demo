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
      <div class="fixed inset-0 bg-aluxion-blue-opacity transition-opacity" aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
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
            @click="goToHomeFromAluxion"
          >
            Casa
          </button>
          <button
            type="button"
            class="inline-flex justify-center rounded-3xl border border-transparent shadow-sm px-4 py-2 bg-aluxion-blue text-base font-medium text-white sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            @click="goToAluxionFromHome"
          >
            Aluxion
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ModalButton from './ModalButton.vue';
import { useUI, useUser, useStop } from '../../composables';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { isModalActive } = useUI();
const { activeUser } = useUser();
const  { searchStopByStopId } = useStop();

const firstName = computed(() => activeUser.value ? activeUser.value.name.first : '');

const goToAluxionFromHome = () => {
  searchStopByStopId(activeUser.value.aluxionToHomeStop);
  router.push({ name: 'details' });
}

const goToHomeFromAluxion = () => {
  searchStopByStopId(activeUser.value.aluxionToHomeStop);
  router.push({ name: 'details' });
}
</script>

<style scoped>
.bg-aluxion-blue {
  background-color: #081c53;
}

.bg-aluxion-blue-opacity {
  background-color: rgba(8, 28, 83, .75);
}


.text-aluxion-blue {
  color: #081c53;
}
</style>