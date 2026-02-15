<script setup lang="ts">
const route = useRoute();

function isCurrent(path: `/${string}`): string {
  return route.path == path ? "current" : "";
}
</script>
<template>
  <section class="box nav">
    <h2>navbar</h2>
    <section class="navbar">
      <nav>
        <ul>
          <li>
            <NuxtLink to="/" :class="isCurrent('/')">About</NuxtLink>
          </li>
        </ul>
      </nav>
    </section>
  </section>
</template>
<style scoped>
ul {
  display: grid;
}
</style>
