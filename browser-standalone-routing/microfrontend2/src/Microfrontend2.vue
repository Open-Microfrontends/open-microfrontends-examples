<script lang="ts" setup>
import { RouterLink, RouterView } from 'vue-router';
const props = defineProps<{
  routePrefix: string;
}>();
</script>

<template>
  <div class="Microfrontend2">
    <h3>Vue.js Microfrontend</h3>

    <div class="Links">
      <RouterLink :to="`${props.routePrefix}/`">Page A</RouterLink>
      <RouterLink :to="`${props.routePrefix}/pageB`">Page B</RouterLink>
    </div>

    <div>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
  .Microfrontend2 {
    margin: 20px;
  }

  .Links {
    margin: 10px 0;

    a {
      margin-right: 10px;
    }
  }
</style>
