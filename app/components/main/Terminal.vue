<!-- <script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";

const terminalRef = ref<HTMLElement | null>(null);

let lineHeight = 0;

function onWheel(e: WheelEvent) {
  if (!terminalRef.value) return;

  e.preventDefault();

  const direction = e.deltaY > 0 ? 1 : -1;
  terminalRef.value.scrollTop += direction * lineHeight;
}

onMounted(() => {
  if (!terminalRef.value) return

  const computed = getComputedStyle(terminalRef.value)
  lineHeight = parseFloat(computed.lineHeight)

  terminalRef.value.addEventListener('wheel', onWheel, { passive: false })
})


onBeforeUnmount(() => {
  terminalRef.value?.removeEventListener('wheel', onWheel)
})

</script> -->

<template>
  <section class="box terminal">
    <h2>terminal</h2>
    <section ref="terminalRef" class="content">
      <slot />
    </section>
  </section>
</template>
