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
  display: grid;
  height: 80%;
  grid-template-columns: 20% auto 20%;
  gap: 1vw;
}
.box {
  height: 100%;
}
</style>
