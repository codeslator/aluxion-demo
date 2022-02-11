<template>
  <hero :title="'Don\'t be late, aluxioner'" />
  <user-list />
</template>

<script setup lang="ts">
import Hero from '../components/hero/Hero.vue';
import UserList from '../components/users/UserList.vue';
</script>