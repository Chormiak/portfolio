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

section ul li a.current::before {
  content: "[*] ";
}

@media (max-width: 900px) {
  @media (max-width: 400px) {
    section ul {
      grid-template-columns: repeat(3, minmax(min-width, 1fr));
      gap: 0.65rem;
    }
  }
  @media (min-width: 451px) {
    section ul {
      justify-content: end;
      grid-template-columns: 15% 15% 15%;
      gap: 1.25rem;
    }
  }
  section ul {
    margin: 0.65rem 0;
    /* font-size: 1.1rem; */
    grid-auto-flow: column;
    grid-template-rows: repeat(3, auto);
    text-align: end;
  }

  section ul li a::before {
    content: "[";
  }

  section ul li a::after {
    content: "]";
  }

  section ul li a.current {
    background-color: var(--main-general-color-clear);
    color: var(--main-background-color);
  }

  section ul li a.current::before {
    content: "[";
  }
}
</style>
