<template>
  <a
    v-if="isExternalLink"
    :href="link.to"
    target="_blank"
    :class="classes"
    aria-current="page"
  >{{ link.name }}</a>
  <router-link v-else v-slot="{ isActive }" :to="route">
    <a
      class="text-white px-3 py-2 text-sm font-medium"
      :class="[isActive ? 'is-active' : 'normal-link', classes]"
    >{{ link.name }}</a>
  </router-link>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
  classes: {
    type: String,
  }
});

const isExternalLink = computed(() => {
  return props.link.to.startsWith("http");
})

const route = computed(() => {
  return (props.link.id === undefined)
    ? { name: props.link.to }
    : { name: props.link.to, params: { id: props.link.id } };
})
</script>

<style scoped>
.is-active {
  color: #fff;
}

.normal-link {
  color: #c6c5c5;
}
</style>