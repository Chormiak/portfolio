// Important: Each id must be unique
export const projects: {
  id: string;
  name: string;
  problem: string;
  stack: string[];
  architecture: string[];
  features: string[];
  status: string;
  repo: `https://github.com/${string}`;
}[] = [ 
  {
    id: "nome",
    name: "Nome",
    problem: "Frase",
    stack: ["Typescript", "Nodejs", "Fastify"],
    architecture: ["layered (controller/service/repository)"],
    features: ["auth(jwt)", "hashing"],
    status: "Em desenvolvimento",
    repo: "https://github.com/Chormiak/portfolio",
  },
];
