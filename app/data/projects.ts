// Important: Each id must be unique and the same as the path of your project
export const projects: {
  id: string;
  name: string;
  about: string;
  stack: string[];
  arch: string[];
  features: string[];
  status: string;
  repo: `https://github.com/${string}`;
}[] = [
  {
    id: "nome",
    name: "Nome",
    about: "Gerador de Café",
    stack: ["Typescript", "Nodejs", "Fastify"],
    arch: ["layered"],
    features: ["auth(jwt)", "hashing"],
    status: "Em desenvolvimento",
    repo: "https://github.com/Chormiak/portfolio",
  },
];
