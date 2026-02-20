<script setup lang="ts">
const route = useRoute();
</script>
<template>
  <nav>
    <ul>
      <li>
        <h1><NuxtLink to="/">William Chormiak</NuxtLink></h1>
      </li>
      <li>
        <NuxtLink v-if="route.path !== '/'" :to="route.path">
          {{ route.name ? route.name : 404 }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  position: relative;
  z-index: 2;
}
ul {
  display: grid;
  width: auto;
  padding: 0.2rem 0.5rem;
}
</style>
