<script setup lang="ts">
import { projects } from "~/data/projects";

// Path to project
const path = "projects";

// Check if its are on mobile
const isMobile = ref(false);

onMounted(() => {
  const media = window.matchMedia("(max-width: 900px)");
  isMobile.value = media.matches;

  const handler = (e: MediaQueryListEvent) => {
    isMobile.value = e.matches;
  };

  isMobile.value = media.matches;
  media.addEventListener("change", handler);

  onUnmounted(() => {
    media.removeEventListener("change", handler);
  });
});

// Accordion mechanics in projects
const openId: Ref<string | undefined> = ref();

function toggle(index: string): void {
  if (openId.value == index) return (openId.value = undefined);
  openId.value = index;
}
</script>
<template>
  <ol>
    <li v-for="{ id, ...project } in projects" :key="id">
      <ContentProjectItem
        @toggle="toggle(id)"
        :is-open="!isMobile || openId === id"
        v-bind="project"
        :details="`/${path}/${id}`"
      />
    </li>
  </ol>
</template>
<style scoped>
ol {
  counter-reset: item;
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
}
ol li {
  display: flex;
  column-gap: 0.65rem;
  counter-increment: item;
}

ol li::before {
  content: "[" counter(item) "]";
}
@media (max-width: 900px) {
  ol {
    row-gap: 0.65rem;
  }
}
</style>
