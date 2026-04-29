// function calcularDesconto(cliente, valor) {
//   if (cliente.tipo === 'premium') {
//     if (valor > 1000) {
//       if (cliente.anosCadastro > 5) {
//         return valor * 0.20;
//       } else {
//         return valor * 0.15;
//       }
//     } else if (valor > 500) {
//       return valor * 0.10;
//     } else {
//       return valor * 0.05;
//     }
//   } else if (cliente.tipo === 'gold') {
//     if (valor > 1000) {
//       return valor * 0.10;
//     } else {
//       return valor * 0.02;
//     }
//   }
//   return 0;
// }

// module.exports = calcularDesconto;

const regras_descontos = {
  premium: (valor, anos = 0) => {
    if (valor > 1000) return anos > 5 ? 0.20 : 0.15;
    if (valor > 500) return anos > 5 ? 0.10 : 0.05;
  },
  gold: (valor) => {
    return valor > 1000 ? 0.10 : 0.02;
  }
}

function CacularDesconto(cliente, valor) {
  const regra = regras_descontos[cliente.tipo]
  
  if (!regra) {
    return 0;
  }

  const percentual = regra(valor, cliente.anosCadastro);
  return valor * percentual
}

module.exports = CacularDesconto;
