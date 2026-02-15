<template>
  <div class="app">
    <header>
      <Header />
    </header>
    <main>
      <MainNav />
      <MainTerminal>
        <slot />
      </MainTerminal>
      <MainProfile />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>
<style scoped>
main {
  grid-template-columns: 20% auto 20%;
}
</style>
