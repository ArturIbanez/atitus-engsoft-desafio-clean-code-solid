const calcularDesconto = require("../src/calcularDesconto");

describe("Desafio 1: Complexidade Ciclomática", () => {
  test("Premium com valor alto e anos de casa recebe 20%", () => {
    expect(calcularDesconto({ tipo: 'premium', anosCadastro: 10 }, 2000)).toBe(400);
  });
  test("Gold com valor baixo recebe 2%", () => {
    expect(calcularDesconto({ tipo: 'gold' }, 100)).toBe(2);
  });
  test("Cliente comum não recebe desconto", () => {
    expect(calcularDesconto({ tipo: 'comum' }, 100)).toBe(0);
  });
});
