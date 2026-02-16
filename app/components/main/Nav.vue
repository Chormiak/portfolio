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
          <li>
            <NuxtLink to="/test" :class="isCurrent('/test')">Test</NuxtLink>
          </li>
        </ul>
      </nav>
    </section>
  </section>
</template>
<style scoped>
.box {
  padding: 1.25rem 1.5vw;
  border: var(--main-general-color-clear) clamp(1px, 0.5vw, 2px) solid;
  display: flex;
  flex-direction: column;
  min-height: 0;
  position: relative;
}

.box h2 {
  position: absolute;
  top: 0;
  left: 1.5vw;
  transform: translateY(-50%);
  background-color: var(--main-background-color);
  padding: 0 clamp(7px, 0.5vw, 15px);
  z-index: 1;
}

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
  section ul {
    font-size: clamp(10px, 4.5vw, 20px);
    grid-auto-flow: column;
    grid-template-rows: repeat(3, auto);
    grid-auto-columns: max-content;
    row-gap: 3vw;
    column-gap: 6vw;
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

  .app.green section ul li a.current {
    background-color: var(--main-general-color-green);
  }
}
</style>
