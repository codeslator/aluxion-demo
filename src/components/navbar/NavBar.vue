<template>
  <nav class="bg-transpatent w-full pt-5">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <span v-if="title">{{ title }}</span>
          <img v-else src="../../assets/Aluxion-Web.svg" alt="Aluxion Logo">
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <nav-item
                v-for="link in links"
                :key="link.to"
                :link="link"
                :classes="'text-white px-3 py-2 text-sm font-medium'"
              />
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <menu-button />
        </div>
        </div>
      </div>
    </div>
    <div class="sm:hidden" id="mobile-menu" v-show="isMenuActive">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <nav-item
          v-for="link in links"
          :key="link.to"
          :link="link"
          :classes="'text-white block px-3 py-2 rounded-md text-base font-medium'"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import useUI from '../../composables/useUI';
import MenuButton from './MenuButton.vue';
import NavItem from './NavItem.vue';

const { isMenuActive } = useUI();
const { title } = defineProps({
  title: {
    type: String,
  }
})

const links = [
  { to: 'home', name: 'Inicio' },
  { to: 'details', name: 'Metro' },
  { to: 'details', name: 'Cercanias' },
  { to: 'details', name: 'Carshing' },
];

</script>

<style scoped>
.transparent-bg {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>