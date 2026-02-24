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

/* .box { usar na animação
  padding: 0;
  width: 0;
  margin: 0 auto;
} */

main {
  grid-template-columns: 20% minmax(0, 60%) 20%;
  margin-top: 2.3rem;
  margin-bottom: 5.65rem;
}
main > * {
  grid-column: 2;
}

@media (max-width: 900px) {
  main {
    margin-top: 1.55rem;
    margin-bottom: 2.9rem;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 1fr 20%;
  }
  main > * {
    grid-column: 1;
    grid-row: 2;
  }
}
</style>
