<template>
  <article>
    <h4>{{ 2025 }} - Backend Developer</h4>
    <div>
      <p><stroke>Enterprise:</stroke> IFC</p>
      <p><stroke>Foco:</stroke> APIs REST, arquitetura em camadas</p>
      <p><stroke>Conceitos:</stroke> HTTP, autenticação, hashing, JWT</p>
    </div>
  </article>
</template>
<style scoped>
p {
  color: var(--color-text-secondary);
  padding-left: 1ch;
  text-indent: -1ch;
}

article {
  position: relative;
  margin-left: 0.65rem;
}

article h4::before {
  content: "*";
  background-color: var(--color-bg-primary);
  left: calc(-0.65rem - 0.0625rem);
  transform: translateX(-50%);
  position: absolute;
}
article div {
  margin-left: 1.25rem;
}

@media (max-width: 900px) {
  article div {
    margin-left: 0.65rem;
  }
}
</style>
