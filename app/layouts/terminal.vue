<template>
  <div class="app">
    <header>
      <Header />
    </header>
    <main class="terminal-layout">
      <MainTerminal>
        <slot />
      </MainTerminal>
    </main>
    <footer>
      <FooterCopyright />
    </footer>
  </div>
</template>
<style scoped>
.copyright {
  padding-top: 2.5rem;
}

@media (min-width: 901px) {
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
  main {
    grid-template-rows: 20% minmax(0, 55%) 1fr;
  }
  main > * {
    grid-row: 2;
  }
}
</style>
