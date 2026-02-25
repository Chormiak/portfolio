<template>
  <ol>
    <li>
      <ContentProjectItem
        repo="https://github.com/Chormiak/portfolio"
        problem="Frase"
        details="/projects/cashflow-api"
        name="Nome"
        :stack="['Typescript', 'Nodejs', 'Fastify']"
        :architecture="['layered (controller/service/repository)']"
        :features="['auth(jwt)', 'hashing']"
        status="Em desenvolvimento"
      />
    </li>
    <li>
      <ContentProjectItem
        repo="https://github.com/Chormiak/portfolio"
        problem="Frase"
        details="/projects/cashflow-api"
        name="Nome"
        :stack="['Typescript', 'Nodejs', 'Fastify']"
        :architecture="['layered (controller/service/repository)']"
        :features="['auth(jwt)', 'hashing']"
        status="Em desenvolvimento"
      />
    </li>
  </ol>
</template>
<style scoped>
ol {
  counter-reset: item;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
ol li {
  display: flex;
  gap: 0.65rem;
  counter-increment: item;
}

ol li::before {
  content: "[" counter(item) "]";
}
</style>
