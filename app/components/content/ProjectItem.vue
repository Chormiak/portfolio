<script setup lang="ts">
defineProps<{
  name: string;
  problem: string;
  stack: string[];
  architecture: string[];
  features: string[];
  status: string;
  repo: `https://github.com/${string}`;
  details: `/${string}`;
}>();
</script>
<template>
  <ul>
    <li>[{{ name }}]</li>
    <li>problem: {{ problem }}</li>
    <li>stack: {{ stack.join(", ") }}</li>
    <li>architecture: {{ architecture.join(" + ") }}</li>
    <li>
      features:
      <ul class="features">
        <li v-for="feature in features" :key="name + '/' + feature">
          {{ feature }}
        </li>
      </ul>
    </li>
    <li>status: {{ status }}</li>
    <li>
      repo: <a :href="repo">{{ repo }}</a>
    </li>
    <li>
      details: <NuxtLink :to="details">{{ details }}</NuxtLink>
    </li>
  </ul>
</template>
<style scoped>

@media (min-width: 901px) {
  .features {
    list-style-position: inside;
  }

  .features li::marker {
    content: "- ";
  }
}

@media (max-width: 900px) {
  .features {
    display: inline;
  }
  .features li {
    display: inline;
  }

  .features li + li::before {
    content: ", ";
  }
}
</style>