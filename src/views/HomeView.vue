<template>
  <div class="sm:mx-auto  w-full md:w-11/12 p-3">
    <hero :title="'Don\'t be late, aluxioner'" />
    <user-list v-if="isAuthenticated" />
  </div>
</template>

<script setup lang="ts">
import Hero from '../components/hero/Hero.vue';
import UserList from '../components/users/UserList.vue';
import useUser from '../composables/useUser';
import useAuth from '../composables/useAuth';

const { isAuthenticated } = useAuth()
useUser()
</script>