<template>
  <div class="app">
    <main class="terminal-layout">
      <MainTerminal>
        <slot />
      </MainTerminal>
    </main>
  </div>
</template>
<style scoped>
.app {
  grid-template-rows: 1fr;
}

@media (min-width: 901px) {
  main {
    padding-top: calc(0.4vw + 1.25rem);
    padding-bottom: calc(5rem + 1.5vw);
  }
  main {
    grid-template-columns: 1fr minmax(0, 60%) 1fr;
  }
  main > * {
    grid-column: 2;
  }
  main .box {
    margin: 0 1vw;
  }
}
@media (max-width: 900px) {
  /* main {
    padding-top: 0.625rem;
    padding-bottom: calc(6vw + 0.625rem);
  } */
  main {
    grid-template-rows: 20% minmax(0, 55%) auto;
  }
  main > * {
    grid-row: 2;
  }
}
</style>
