function calcularDesconto(cliente, valor) {
  if (cliente.tipo === 'premium') {
    if (valor > 1000) {
      if (cliente.anosCadastro > 5) {
        return valor * 0.20;
      } else {
        return valor * 0.15;
      }
    } else if (valor > 500) {
      return valor * 0.10;
    } else {
      return valor * 0.05;
    }
  } else if (cliente.tipo === 'gold') {
    if (valor > 1000) {
      return valor * 0.10;
    } else {
      return valor * 0.02;
    }
  }
  return 0;
}

module.exports = calcularDesconto;
