<template>
  <!-- fazer after nos links's -->
  <ul class="copyright">
    <li>
      <ul>
        <li>
          <a
            href="https://github.com/Chormiak"
            target="_blank"
            rel="noopener noreferrer"
            >Github</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/william-chormiak-54489539a/"
            target="_blank"
            rel="noopener noreferrer"
            >LinkedIn</a
          >
        </li>
        <li>
          <a
            href="mailto:william.chormi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >Email</a
          >
        </li>
      </ul>
    </li>
    <li>&copy;2026 William Chormiak - Backend Developer</li>
  </ul>
</template>
<style scoped>
ul {
  margin-top: 0.625rem;
  /* font-size: clamp(13px, 1.2vw, 14px); */
}

ul li ul {
  display: flex;
  gap: 1.25rem;
}

/* @media (max-width: 900px) {
  .copyright {
    font-size: clamp(14px, 1.2vw, 15px);
  }
} */
</style>
