<script setup lang="ts">
const route = useRoute();

function isCurrent(path: `/${string}`): string {
  return route.path == path ? "current" : "";
}
</script>
<template>
  <section class="box">
    <h2>navbar</h2>
    <section>
      <nav>
        <ul>
          <li>
            <NuxtLink to="/" :class="isCurrent('/')">About</NuxtLink>
          </li>
          <li v-for="i in 8">
            <NuxtLink to="/test" :class="isCurrent('/test')">Test</NuxtLink>
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

section ul li a::before {
  content: "[ ] ";
}

section ul li a.current {
  color: var(--color-accent);
}

section ul li a.current::before {
  content: "[*] ";
}

@media (max-width: 900px) {
  section ul {
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    text-align: end;
    margin: 0.65rem 0;
    gap: 0.65rem;
  }

  section ul li a {
    padding: 0.25rem 0.5rem;
  }

  section ul li a::before {
    content: "[";
  }

  section ul li a::after {
    content: "]";
  }

  section ul li a.current {
    background-color: var(--color-accent);
    color: var(--color-bg-primary);
  }

  section ul li a.current::before {
    content: "[";
  }
}
</style>
