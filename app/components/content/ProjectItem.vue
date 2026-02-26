<script setup lang="ts">
defineEmits<{
  (e: "toggle"): void;
}>();

defineProps<{
  isOpen: boolean;
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
  <article>
    <header @click="$emit('toggle')">
      <h4>{{ name }}</h4>
    </header>
    <Transition name="accordion">
      <section v-if="isOpen">
        <p><strong>problem:</strong> {{ problem }}</p>
        <p><strong>stack:</strong> {{ stack.join(", ") }}</p>
        <p><strong>architecture:</strong> {{ architecture.join(" + ") }}</p>
        <div>
          <strong>features:</strong>
          <ul class="features">
            <li v-for="feature in features" :key="name + '/' + feature">
              {{ feature }}
            </li>
          </ul>
        </div>
        <p><strong>status:</strong> {{ status }}</p>
        <p>
          <strong>repo:</strong>
          <a :href="repo" target="_blank" rel="noopener noreferrer">{{
            repo
          }}</a>
        </p>
        <p>
          <strong>details:</strong>
          <NuxtLink :to="details">{{ details }}</NuxtLink>
        </p>
      </section>
    </Transition>
  </article>
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
