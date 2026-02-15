<template>
  <div class="app">
    <header>
      <Header />
    </header>
    <main>
      <MainProfile />
      <MainTerminal>
        <slot />
      </MainTerminal>
      <MainNav />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<style scoped>
main {
  grid-template-rows: auto 55% auto;
}
</style>
