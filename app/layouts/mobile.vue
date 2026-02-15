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
      <FooterCopyright />
    </footer>
  </div>
</template>
<style scoped>
main {
  grid-template-rows: 20% 55% auto;
}
</style>
