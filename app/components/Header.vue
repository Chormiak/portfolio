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
          {{ route.name }}
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
  grid-template-columns: 1fr auto 1fr;
  width: auto;
  padding: 0.2rem 0.5rem;
}

@media (max-width: 900px) {
  ul {
    grid-template-columns: 1fr auto;
  }
}
</style>
