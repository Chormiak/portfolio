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
      <li>1.0</li>
    </ul>
  </nav>
</template>
<style scoped>
ul {
  width: auto;
  display: flex;
  justify-content: space-between;
  padding: 0.2vw 1vw;
}
</style>
