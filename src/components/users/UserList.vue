<template>
  <div class=""> 
    <div class="section-info">
      <span class="text-sm text-gray-500">Team</span>
      <p class="text-lg">Aluxioners</p>
    </div>
    <div class="section-content w-full grid xs:grid-cols-2 md:grid-cols-6 gap-4 mt-5">
      <user-card 
        v-for="(user, index) in users" 
        :user="user"
        :key="index"
      />
    </div>
    <modal />
  </div>

</template>

<script setup lang="ts">
import Modal from '../modal/Modal.vue'
import UserCard from './UserCard.vue';
import useUser from '../../composables/useUser';

const { users } = useUser();
</script>