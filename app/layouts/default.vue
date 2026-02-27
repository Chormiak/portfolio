<script setup lang="ts">
import { type LayoutState } from "@/types/LayoutState";

// Layout state management
const wasOpened = useState("wasOpened", () => false);
const layoutState = useState<LayoutState>("layoutState", () => "default");

if (!wasOpened.value && layoutState.value !== "error") {
  layoutState.value = "opening";
  wasOpened.value = true;

  // tempo da animação
  setTimeout(() => {
    layoutState.value = "default";
  }, 1000);
}

// Theme control
const theme = useState<"green" | "">("theme", () => "");

const toggleTheme = () => {
  theme.value = theme.value === "green" ? "" : "green";
};
</script>
<template>
  <div class="app" :data-theme="theme" :data-layout="layoutState">
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

main {
  grid-template-columns: 20% auto 20%;
  grid-template-rows: 1fr;
  grid-template-areas: "nav terminal profile";
}

.app[data-layout="error"] .nav, .app[data-layout="error"] .profile {
  visibility: hidden;
}

@media (max-width: 900px) {
  main {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas: "profile" "terminal" "nav";
  }
  .controls {
    display: none;
  }
}
</style>
