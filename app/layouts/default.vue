<template>
  <div class="app">
    <header>
      <Header />
    </header>
    <main>
      <MainNav class="nav" />
      <MainTerminal class="terminal">
        <slot />
      </MainTerminal>
      <MainProfile class="profile" />
    </main>
    <footer>
      <FooterControls />
      <FooterCopyright />
    </footer>
  </div>
</template>
<style scoped>
.nav {
  grid-area: nav;
}
.terminal {
  grid-area: terminal;
}
.profile {
  grid-area: profile;
}

@media (min-width: 901px) {
  main {
    grid-template-columns: 20% auto 20%;
    grid-template-areas: "nav terminal profile";
  }
}

@media (max-width: 900px) {
  main {
    grid-template-columns: 1fr;
    grid-template-rows: 20% 55% auto;
    grid-template-areas: "profile" "terminal" "nav";
  }
  .controls {
    display: none;
  }
}
</style>
