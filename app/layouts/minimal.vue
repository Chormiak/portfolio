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

main {
  grid-template-columns: 20% minmax(0, 60%) 20%;
  margin-top: 2.3rem;
  margin-bottom: 6.3rem;
}
main > * {
  grid-column: 2;
}

@media (max-width: 900px) {
  main {
    grid-template-rows: 20% minmax(0, 55%) auto;
  }
  main > * {
    grid-row: 2;
  }
}
</style>
