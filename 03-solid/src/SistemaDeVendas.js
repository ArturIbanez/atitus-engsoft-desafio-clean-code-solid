
class EmailService {
  enviar(email, mensagem) {
    console.log(`Enviando e-mail para ${email}: ${mensagem}`);
  }
}

class VendasRepository {
  salvar(pedido) {
    console.log(`Salvando pedido ${pedido.id} no banco de dados...`);
  }
}

class Pedido {
  static calcularTotal(itens) {
    let total = itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
    if (total > 1000) total *= 0.9;
    return total;
  }
}

class SistemaDeVendas {
  constructor(
    vendasRepository = new VendasRepository(), 
    notificadorService = new EmailService()
  ) {
    this.vendasRepository = vendasRepository;
    this.notificadorService = notificadorService;
  }

  async processarVenda(pedido) {
    if (!pedido.itens?.length) {
      throw new Error("Pedido sem itens");
    }

    const total = Pedido.calcularTotal(pedido.itens);

    const pedidoProcessado = { ...pedido, total, status: "pago" };
    await this.vendasRepository.salvar(pedidoProcessado);

    await this.notificadorService.enviar(
      pedido.clienteEmail, 
      `Seu pedido ${pedido.id} foi processado.`
    );

    return pedidoProcessado;
  }
}

module.exports = SistemaDeVendas;
