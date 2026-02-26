<script setup lang="ts">
defineEmits<{
  (e: "toggle"): void;
}>();

defineProps<{
  isOpen: boolean;
  name: string;
  about: string;
  stack: string[];
  arch: string[];
  features: string[];
  status: string;
  repo: `https://github.com/${string}`;
  details: `/${string}`;
}>();
</script>
<template>
  <article>
    <header @click="$emit('toggle')">
      <h4>{{ name }}</h4>
      <p>{{ about }}</p>
    </header>
    <Transition name="accordion">
      <section v-if="isOpen">
        <p><strong>stack:</strong> {{ stack.join(", ") }}</p>
        <p>
          <strong>arch<span class="opcional">itecture</span>:</strong>
          {{ arch.join(" + ") }}
        </p>
        <div class="features">
          <strong>features:</strong>
          <ul>
            <li v-for="feature in features" :key="name + '/' + feature">
              {{ feature }}
            </li>
          </ul>
        </div>
        <p><strong>status:</strong> {{ status }}</p>
        <p>
          <strong>repo: </strong>
          <a :href="repo" target="_blank" rel="noopener noreferrer">{{
            `/${repo.split("/").pop()}`
          }}</a>
        </p>
        <p>
          <strong>> </strong>
          <NuxtLink :to="details">open</NuxtLink>
        </p>
      </section>
    </Transition>
  </article>
</template>
<style scoped>
@media (min-width: 901px) {
  header {
    display: inline-flex;
    column-gap: 1ch;
  }
  header p::before {
    content: "- ";
  }
  .features ul {
    list-style-position: inside;
  }

  .features ul li::marker {
    content: " - ";
  }
}

@media (max-width: 900px) {
  .opcional,
  .features {
    display: none;
  }
  .features ul {
    display: inline;
  }
  .features ul li {
    display: inline;
  }

  .features ul li + li::before {
    content: ", ";
  }
}
</style>
