<template>
<div class="grid grid-col">
  <div class="w-full flex flex-row justify-start items-center p-3">
    <img src="../../assets/transport.svg" alt="transport-icon" class="mr-3" >
    <p class="text-lg font-bold">Linea {{ line.line }}</p>
  </div>
  <div
    class="w-full grid grid-cols-12 gap-4 rounded p-2 cursor-pointer"
    @click="setCurrentLine(line)"
    :class="selectedLine && selectedLine.line === line.line ? 'active-line' : 'bg-transparent-dark'"
  >
    <div class="col-span-3 flex justify-center items-center">
      <p class="text-3xl font-bold">{{ line.line }}</p>
    </div>
    <div class="col-span-9">
      <p class="text-xl">{{ line.headerA }}</p>
      <p class="text-sm">{{ line.headerB }}</p>
      <div class="flex justify-between text-sm pt-2">
        <div class="flex flex-row text-time">
          <img src="../../assets/clock.svg" alt="Time">
          <p class="px-2">Time</p>
        </div>
        <div class="flex flex-row text-distance">
          <img src="../../assets/line.svg" alt="Time">
          <p class="px-2">Distance</p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { useStop, useLine } from '../../composables';

const props = defineProps({
  line: {
    type: Object,
    required: true
  }
});

const { selectLine, selectedLine } = useStop();
const { searchLineByLabelId, setIsLineStopsReady } = useLine();

const setCurrentLine = (line: any) => {
  setIsLineStopsReady(false);
  selectLine(line);
  searchLineByLabelId(line.label);
}
</script>

<style scoped>
.bg-transparent-dark {
  background-color: rgba(0, 0, 0, .3);
  color: #fff;
}

.bg-transparent-dark:hover {
  background-color: #fff;
  color: #081C53;
}

.active-line {
  background-color: #fff;
  color: #081C53;
}

.text-white:hover {
  color: #081C53;
}

.text-aluxion {
  color: #081C53;
}
.text-time {
  color: #FFC121;
}

.text-distance {
  color: #2DC8A6;
}
</style>