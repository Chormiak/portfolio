<template>
  <section class="box">
    <h2>profile</h2>
    <section class="profile">
      <img src="/photo.png" alt="My Photo" />
      <ul>
        <li>Backend Developer</li>
        <li>Node.js · Fastify · TypeScript · MySQL · WebCrypto</li>
        <li>Disponível para presencial</li>
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

.profile {
  font-size: clamp(13px, 1.2vw, 14px);
}

.box ul {
  display: grid;
  gap: 0.625rem;
}

@media (max-width: 900px) {
  .profile {
    display: flex;
    align-items: flex-start;
    gap: 1.5vw;
    margin: -0.6rem 0 calc(1.5vw - 1.25rem) 0;
  }

  .profile img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
