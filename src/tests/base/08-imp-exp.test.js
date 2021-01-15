import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en funciones de heroes", () => {
  test(" debe de retornar un héroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);

    expect(heroe).toEqual(heroeData);
  });

  test(" debe retornar undefined si Héroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });

  test("Debe de regresar un arreglo con los heroes de DC ", () => {
    const owner = "DC";

    const DCHeroes = getHeroesByOwner(owner);

    const DCData = heroes.filter((h) => h.owner === owner);

    expect(DCHeroes).toEqual(DCData);
  });

  test("Debe rertornar un arrego con los heroes de Marvel", () => {
    const owner = "Marvel";

    const marvelHeroes = getHeroesByOwner(owner);

    const marvelData = heroes.filter((h) => h.owner === "Marvel");

    expect(marvelHeroes.length).toBe(marvelData.length);
  });
});
