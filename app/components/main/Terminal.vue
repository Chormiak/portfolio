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

.terminal-layout .box h2 {
  display: none;
}
.terminal-layout .box .content {
  flex: 1;
  display: grid;
  place-items: center;
}

.box .content {
  overflow-y: scroll;
  scrollbar-gutter: stable;
  scrollbar-color: var(--main-general-color-clear) transparent;
  scrollbar-width: unset;
}

.app.green .content {
  scrollbar-color: var(--main-general-color-green) transparent;
}
</style>
