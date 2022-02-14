<template>
  <section id="stop-details" class="mb-4" v-if="isStopReady">
    <div class="w-full p-2" >
      <div class="grid grid-rows-2 gap-2">
        <div class="grid justify-start align-end">
          <p class="text-sm text-grey-500">Autobuses Cercanos</p>
        </div>
        <div class="flex flex-row justify-between">
          <div class="text-start">
            <p class="text-2xl font-bold text-white">{{ stopName }}</p>
          </div>
          <div class="gap-4">
            <grid-button />
            <list-button />
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4" :class="isGridViewActive ? 'grid-cols-2' : 'grid-cols-1'">
      <stop-card 
        v-for="(line, index) in currentLines"
        :line="line"
        :key="index"
      />
    </div>
  </section>
  <div class="text-center" v-else>
    <h1>Stop not found</h1>
  </div>
</template>

<script lang="ts" setup>
import StopCard from './StopCard.vue';
import GridButton from './GridButton.vue';
import ListButton from './ListButton.vue';
import useStop from '../../composables/useStop';
import { useUI } from '../../composables';

const { isStopReady, stopName, currentLines } = useStop();
const { isGridViewActive } = useUI()

</script>