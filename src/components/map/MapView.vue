<template>
  <div class="w-full flex justify-center items-center" v-if="!isStopReady && isLoadingStop">
    <div class="text-center">
      <h3>Please wait...</h3>
      <span>Locating...</span>
    </div>
  </div>
  <div class="map-container w-full h-screen" ref="mapElement" v-show="isStopReady"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import Mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import { useMap, useStop, useLine } from '../../composables';

const { isStopReady, isLoadingStop, stopCoords, stopName } = useStop();
const { setMap, setMarkers } = useMap();
const { lineStops, isIsLineStopsReady } = useLine();

const mapElement = ref<HTMLDivElement>();

const initMap = async () => {
  if (!mapElement.value) throw new Error('Div element undefined');
  if (!stopCoords.value) throw new Error('User location undefined');
  await Promise.resolve();
  const map = new Mapboxgl.Map({
    container: mapElement.value, // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: stopCoords.value, // starting position [lng, lat]
    zoom: 15 // starting zoom
  });

  const myLocationPopup = new Mapboxgl.Popup()
    .setLngLat(stopCoords.value)
    .setHTML(`
      <h4 class="text-black">Parada Actual</h4>
      <p class="text-black">${stopName.value}</p>
      <p class="text-black">${stopCoords.value}</p>
    `);
  const myLocationMarker = new Mapboxgl.Marker()
    .setLngLat(stopCoords.value)
    .setPopup(myLocationPopup)

    .addTo(map);
  setMap(map); // Setting map in Store
}

onMounted(() => {
  if (isStopReady.value) return initMap();
});

watch(isStopReady, (newValue) => {
  if (isStopReady.value) initMap();
});

watch(isIsLineStopsReady,  (newStops) => {
  if(isIsLineStopsReady.value) initMarkers();
});

const initMarkers = async () => {
  await Promise.resolve();
  setMarkers(lineStops.value);
};




</script>

<style scoped>
.map-container {
    position: relative;
  }
</style>