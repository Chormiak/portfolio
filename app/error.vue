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
  background-color: var(--main-general-color-clear);
  color: var(--main-background-color);
}
.app.green .box .content section button {
  background-color: var(--main-general-color-green);
}
</style>
