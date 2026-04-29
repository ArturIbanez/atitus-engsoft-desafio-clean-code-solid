/**
 * ❌ OTIMIZAÇÃO O(n²) para O(n)
 */
function encontrarProdutosComuns(listaA, listaB) {
  const setB = new Set(listaB);

  return listaA.filter(item => setB.has(item));
}

module.exports = encontrarProdutosComuns;
