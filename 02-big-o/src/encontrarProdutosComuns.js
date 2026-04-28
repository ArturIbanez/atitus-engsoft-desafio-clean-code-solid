/**
 * ❌ OTIMIZAÇÃO O(n²) para O(n)
 */
function encontrarProdutosComuns(listaA, listaB) {
  const comuns = [];
  for (let i = 0; i < listaA.length; i++) {
    for (let j = 0; j < listaB.length; j++) {
      if (listaA[i] === listaB[j]) {
        comuns.push(listaA[i]);
      }
    }
  }
  return comuns;
}

module.exports = encontrarProdutosComuns;
