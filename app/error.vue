<template>
  <NuxtLayout name="terminal">
    <section>
      <IconError />
      <p>resource_not_found: invalid_path</p>
      <NuxtLink to="/">[Homepage]</NuxtLink>
    </section>
  </NuxtLayout>
</template>
<style scoped>
.box .content section {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box .content section a {
  margin-top: 1.25rem;
  background-color: var(--main-general-color-clear);
  color: var(--main-background-color);
}
.app.green .box .content section a {
  background-color: var(--main-general-color-green);
}

</style>