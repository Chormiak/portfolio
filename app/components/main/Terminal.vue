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
  padding-bottom: 0.3rem;
}

.app[data-layout="error"] .box h2 {
  display: none;
}
.app[data-layout="error"] .box .content {
  flex: 1;
  display: grid;
  place-items: center;
}

.box .content {
  overflow-y: scroll;
  scrollbar-gutter: stable;
  scrollbar-color: var(--color-text-secondary) transparent;
  scrollbar-width: unset;
}
</style>
