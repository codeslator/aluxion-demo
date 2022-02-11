<template>
  <section class="container flex flex-row xs:grid-cols-1 sm:grid-cols-2  gap-4 items-end py-5" id="hero">
    <div class="w-full sm:w-8/12">
      <h1 class="text-8xl">{{ title }}</h1>
    </div>
    <div class="w-full sm:w-4/12">
      <search-bar />
    </div>
  </section>
</template>

<script setup lang="ts">
import SearchBar from './SearchBar.vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  }
})

</script>

<style scoped>
.hero-large {
  height: 50% !important;
}
</style>