<template>
  <section class="box">
    <h2>profile</h2>
    <section>
      <img src="/photo.png" alt="My Photo" />
      <ul>
        <!-- transformar essas li em NuxtLink até determinado conteúdo -->
        <li>Backend Developer</li>
        <!-- o que eu faço -->
        <li>Node.js · Fastify · TypeScript · MySQL · WebCrypto</li>
        <!-- minhas tecnológias -->
        <li>Disponível para presencial</li>
        <!-- Por que quero presencial? Trabalho em equipe -->
      </ul>
    </section>
  </section>
</template>
<style scoped>
.box ul {
  display: grid;
  gap: 0.625rem;
}

img {
  width: 100%;
  object-fit: contain;
}

@media (max-width: 900px) {
  .box section {
    line-height: 1rem;
    display: flex;
    gap: 0.625rem;
    align-items: stretch;
    font-size: 0.8rem;
  }

  .box section img {
    width: 60%;
    max-width: 10rem;
    height: 100%;
  }
}
</style>
