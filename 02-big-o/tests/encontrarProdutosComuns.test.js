const encontrarProdutosComuns = require("../src/encontrarProdutosComuns");

describe("Desafio 2: Big-O", () => {
  test("Encontra itens comuns entre duas listas", () => {
    const a = [1, 2, 3, 4];
    const b = [3, 4, 5, 6];
    expect(encontrarProdutosComuns(a, b)).toEqual([3, 4]);
  });

  test("Deve ser eficiente com listas grandes (O(n))", () => {
    const a = Array.from({ length: 10000 }, (_, i) => i);
    const b = [9999, 10001];
    const start = Date.now();
    encontrarProdutosComuns(a, b);
    const end = Date.now();
    expect(end - start).toBeLessThan(100); // Deve ser muito rápido se for O(n)
  });
});
