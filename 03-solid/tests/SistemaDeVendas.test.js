const SistemaDeVendas = require("../src/SistemaDeVendas");

describe("Desafio 3: SOLID", () => {
  test("Processa venda com total e desconto", async () => {
    const sistema = new SistemaDeVendas();
    const pedido = { id: 1, clienteEmail: "a@a.com", itens: [{ preco: 1200, quantidade: 1 }] };
    const res = await sistema.processarVenda(pedido);
    expect(res.total).toBe(1080);
  });
});
