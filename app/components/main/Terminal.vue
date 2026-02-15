<script setup lang="ts">

</script>

<template>
  <section class="box">
    <h2>terminal</h2>
    <section class="terminal">
      <slot />
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

.terminal-layout .box h2 {
  display: none;
}



.terminal {
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: var(--main-general-color-clear) transparent;
  scrollbar-width: unset;
  margin: -0.625rem -1vw -0.625rem -1vw;
  height: calc(100% + 1.5vw);
  width: calc(100% + 2vw);
  font-size: clamp(13px, 1.2vw, 14px);
}

.app.green .terminal {
  scrollbar-color: var(--main-general-color-green) transparent;
}

@media (max-width: 900px) {
  .terminal {
    font-size: clamp(14px, 1.2vw, 15px);
    height: calc(100% + 1.25rem);
    margin: -0.625rem 0 -0.625rem 0;
  }
}
</style>
