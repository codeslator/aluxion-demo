<template>
  <div class="w-full">
    <section class="flex md:flex-row xs:flex-col" id="map">
      <div class="w-full md:w-6/12 p-4">
        <stops-list />
      </div>
      <div class="w-full md:w-6/12">
        <map-view />
      </div>
    </section>
  </div>
    <fab />
</template>

<script lang="ts" setup>
import Fab from '../components/fab/Fab.vue';
import MapView from '../components/map/MapView.vue';
import StopsList from '../components/stops/StopsList.vue';
</script>