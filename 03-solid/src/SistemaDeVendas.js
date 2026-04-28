class SistemaDeVendas {
  async processarVenda(pedido) {
    if (!pedido.itens || pedido.itens.length === 0) throw new Error("Pedido sem itens");
    
    let total = 0;
    for (const item of pedido.itens) total += item.preco * item.quantidade;
    if (total > 1000) total *= 0.9;

    console.log(`Salvando pedido ${pedido.id}...`);
    console.log(`Enviando e-mail para ${pedido.clienteEmail}...`);
    
    return { ...pedido, total, status: "pago" };
  }
}

module.exports = SistemaDeVendas;
