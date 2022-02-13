<template>
  <div class="group relative" @click="selectUser(user)">
    <div
      class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-52 lg:aspect-none"
      
    >
      <img
        :src="imagePath"
        :alt="fullName"
        class="w-full h-full object-center object-cover lg:w-full lg:h-52"
      />
    </div>
    <div class="mt-4 flex justify-between">
      <div>
        <h3 class="text-sm text-gray-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          <span class="text-lg text-white">
              {{ fullName }}
          </span>
        </h3>
        <p class="mt-1 text-sm text-gray-400">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import useUser from '../../composables/useUser';
import { User } from '../../interfaces/users';
import useUI from '../../composables/useUI';

const props = defineProps({
  user: {
    type: Object,
    required: true,
  }
});

const { setActiveUser } = useUser();
const { toggleModal } = useUI();

const fullName = computed<string>(() => {
  return `${props.user.name.first} ${props.user.name.last}`;
});

const imagePath = computed<string>(() => props.user.picture.large);
const description = computed<string>(() => {
  return `${props.user.nat.toUpperCase()} | ${props.user.email}`;
});

const selectUser = (user: User) => {
  setActiveUser(user);
  toggleModal();

}
</script>