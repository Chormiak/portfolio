<template>
  <nav>
    <ul class="controls">
      <li>
        <button><span>^M</span> Theme Toggle</button>
      </li>
      <li>
        <button><span>^B</span> Betinha</button>
      </li>
      <li>
        <button><span>^M</span> Theme Toggle</button>
      </li>
      <li>
        <button><span>^B</span> Betinha</button>
      </li>
      <li>
        <button>AA</button>
      </li>
    </ul>
    <ul class="copyright">
      <li>Github | LinkedIn | Email</li>
      <li>&copy;2026 William Chormiak - Backend Developer</li>
    </ul>
  </nav>
</template>
<style scoped>
nav {
  margin-bottom: 1vw;
}

.controls {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(2, auto);
  grid-auto-columns: max-content;
  column-gap: 4rem;
  row-gap: 0;
  justify-content: center;
}

.copyright {
  font-size: clamp(13px, 1.2vw, 14px);
  margin-top: 0.5vw;
}
</style>
