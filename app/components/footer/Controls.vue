<template>
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
</template>
<style scoped>
.controls {
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(2, auto);
  grid-auto-columns: max-content;
  column-gap: 4rem;
  row-gap: 0;
  justify-content: center;
}
</style>
