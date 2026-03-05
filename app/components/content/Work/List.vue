<template>
  <ul>
    <li v-for="i in 3">
      <ContentWorkItem />
    </li>
  </ul>
</template>
<style scoped>
ul {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 0.125rem;
  row-gap: 3.75rem;
  margin-left: 1.25rem;
}
ul::before {
  content: "";
  position: absolute;
  left: 0;
  top: 2.5px;
  bottom: 0;
  width: 0.125rem;

  background: repeating-linear-gradient(
    to bottom,
    var(--color-border-muted) 0,
    var(--color-border-muted) 0.95rem,
    transparent 0.95rem,
    transparent 1.25rem
  );
}

@media (max-width: 900px) {
  ul {
    margin-left: 0.65rem;
    row-gap: 2.5rem;
  }
}
</style>
