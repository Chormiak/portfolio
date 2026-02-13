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
ul {
  width: 100%;
  background-color: var(--main-general-color-clear);
  padding: 0.2vw 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
}
ul li:first-child {
  padding-left: 1vw;
}
</style>
