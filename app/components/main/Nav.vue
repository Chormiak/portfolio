<script setup lang="ts">
const route = useRoute();
function isCurrent(path: `/${string}`): string {
  return route.path == path ? "*" : " ";
}
</script>
<template>
  <section class="box">
    <h2>navbar</h2>
    <section>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/"
              ><span>[{{ isCurrent("/") }}] </span>Welcome</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/test"
              ><span>[{{ isCurrent("/test") }}] </span>Test</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </section>
  </section>
</template>
<style scoped>

</style>
