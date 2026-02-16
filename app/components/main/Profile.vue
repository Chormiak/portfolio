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
.box {
  padding: 1.25rem 1.5vw;
  border: var(--main-general-color-clear) clamp(1px, 0.5vw, 2px) solid;
  display: flex;
  flex-direction: column;
  min-height: 0;
  position: relative;
}

.box h2 {
  position: absolute;
  top: 0;
  left: 1.5vw;
  transform: translateY(-50%);
  background-color: var(--main-background-color);
  padding: 0 clamp(7px, 0.5vw, 15px);
  z-index: 1;
}

.box section {
  min-height: 0;
}

.box section {
  font-size: clamp(13px, 1.2vw, 14px);
}

.box ul {
  display: grid;
  gap: 0.625rem;
}

@media (max-width: 900px) {
  .box section {
    display: flex;
    align-items: flex-start;
    gap: 1.5vw;
    margin: -0.6rem 0 calc(1.5vw - 1.25rem) 0;
  }

  .box section img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
