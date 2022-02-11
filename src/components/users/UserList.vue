<template>
  <div class="container "> 
    <div class="section-info">
      <span class="text-sm text-gray-500">Team</span>
      <p class="text-lg">Aluxioners</p>
    </div>
    <div class="section-content grid xs:grid-cols-2 md:grid-cols-6 gap-4 mt-5">
      <user-card />
      <user-card />
      <user-card />
      <user-card />
    </div>
  </div>

</template>

<script setup lang="ts">
import UserCard from './UserCard.vue';
</script>