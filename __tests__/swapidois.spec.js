const request = require("supertest");

it("Deve buscar pelos planetas do universo de StarWars", async () => {
  const res = await request(`https://swapi.dev/api`).get("/planets/1");

  expect(res.status).toBe(200);
  expect(res.body.name).toBe("Tatooine");
  expect(res.body.rotation_period).toBe("23");
  expect(res.body.residents.length).toBeGreaterThan(0);
  expect(res.body.climate).toBe("arid");
});
