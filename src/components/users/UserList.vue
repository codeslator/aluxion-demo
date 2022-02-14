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
        @click="selectUser(user)"
      />
    </div>
    <modal />
  </div>

</template>

<script setup lang="ts">
import Modal from '../modal/Modal.vue'
import UserCard from './UserCard.vue';
import { useUser, useUI } from '../../composables';
import { User } from '../../interfaces/users';

const { users, setActiveUser } = useUser();
const { toggleModal } = useUI();

const selectUser = (user: User) => {
  setActiveUser(user);
  toggleModal();
}
</script>