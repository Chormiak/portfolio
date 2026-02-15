<script setup lang="ts">
const isMobile = ref(false);

function check() {
  isMobile.value = window.matchMedia("(max-width: 900px)").matches;
}

onMounted(() => {
  check();
  window.addEventListener("resize", check);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", check);
});
</script>
<template>
  <ClientOnly>
    <NuxtLayout :name="!isMobile ? 'default' : 'mobile'">
      <NuxtPage />
    </NuxtLayout>
  </ClientOnly>
</template>
