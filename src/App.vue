<script setup lang="ts">
import Navbar from './components/navbar/NavBar.vue';
</script>

<template>
  <navbar :title="'Aluxion'" />
  <main class="container mx-auto p-3 xs:w-full sm:w-11/12">
    <router-view></router-view>
  </main>
</template>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #081C53;
}
</style>
