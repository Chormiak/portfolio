<template>
  <section class="box">
    <h2>terminal</h2>
    <section class="content">
      <slot />
    </section>
  </section>
</template>

<style scoped>
.box {
  padding-inline: 0.3rem;
}
.terminal-layout .box h2 {
  display: none;
}

.box .content {
  /* flex: 1; */
  /* min-height: 0; */
  overflow: auto;
  
  scrollbar-color: var(--main-general-color-clear) transparent;
  scrollbar-width: unset;
  /* margin: -0.625rem -1vw -0.625rem -1vw; */
  /* height: 100%; */
  /* font-size: clamp(13px, 1.2vw, 14px); */
}

.app.green .content {
  scrollbar-color: var(--main-general-color-green) transparent;
}

/* @media (max-width: 900px) {
  .box .content {
    font-size: clamp(14px, 1.2vw, 15px);
    height: calc(100% + 1.25rem);
    margin: -0.625rem 0 -0.625rem 0;
  }
} */
</style>
