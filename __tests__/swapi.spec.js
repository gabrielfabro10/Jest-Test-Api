const request = require("supertest");

it("Deve visualizar informações de cadastro, quando buscar por uma pessoa existente", async () => {
  const resposta = await request(`https://swapi.dev/api`).get(`/people/1`);

  expect(resposta.status).toBe(200);
  expect(resposta.body.films).toBeDefined();
  expect(resposta.body.vehicles.length).toBeGreaterThan(0);
  expect(resposta.body.name).toBe("Luke Skywalker");
});

it("Deve receber uma mensagem de erro, quando buscar por uma pessoa inexistente", async () => {
  const resposta = await request(`https://swapi.dev/api`).get(`/people/90`);

  expect(resposta.status).toBe(404);
  expect(resposta.body).toMatchObject({
    detail: "Not found",
  });
});
