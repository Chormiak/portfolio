<template>
  <section id="hero">
    <IconName />
    <h3>> .hero</h3>
    <p> <!-- style="text-indent: 1ch;" -->
      Estudante de Desenvolvimento Web, com foco em backend e arquitetura de
      API's.
    </p>
    <p>
      Estruturo aplicações em camadas bem definidas, isolando regras de
      negócio e mantendo separação clara de responsabilidades.
    </p>
  </section>
  <section id="projects">
    <h3>> .projects</h3>
    <ContentProjectList />
  </section>
</template>
<style scoped>
h3 {
  margin: 1.25rem 0;
  font-weight: bold;
}
</style>

<!-- 
> cat projects/cashflow-api

name: cashflow-api
type: backend service
purpose: cash flow forecasting system

architecture:
  - layered structure
  - business rules isolated in service layer
  - centralized error handling

security:
  - jwt authentication
  - password hashing
  - rate limiting

stack:
  - fastify
  - postgresql
  - docker

repo: github.com/...
-->

