<template>
  <navbar />
  <main class="w-full">
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

<script lang="ts" setup>
import Navbar from './components/navbar/NavBar.vue';
import useAuth from './composables/useAuth';

useAuth();
</script>
