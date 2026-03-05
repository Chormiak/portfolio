<script setup lang="ts">
import { type LayoutState } from "@/types/LayoutState";
const layoutState = useState<LayoutState>("layoutState");

layoutState.value = "error";

async function handleBack() {
  layoutState.value = "default";
  await clearError({ redirect: "/" });
}
</script>
<template>
  <NuxtLayout name="default">
    <section>
      <IconError />
      <p>Recurso não encontrado: caminho inválido</p>
      <button @click="handleBack">[Homepage]</button>
    </section>
  </NuxtLayout>
</template>
<style scoped>
.box .content section {
  text-align: center;
}
.box .content section p {
  margin-bottom: 1.25rem;
}
.box .content section button {
  background-color: var(--color-text-primary);
  color: var(--color-bg-primary);
}
</style>
