# ⏱️ Desafio 02: Performance e Big-O

Em Engenharia de Software, não basta que o código funcione; ele deve ser eficiente. Algoritmos com complexidade quadrática **O(n²)** escalam mal e podem causar gargalos de performance.

## 🎯 O Desafio

A função `encontrarProdutosComuns.js` utiliza dois loops aninhados (`for` dentro de `for`), resultando em uma complexidade **O(n * m)**.

### Requisitos:
1.  **Otimize para O(n):** Utilize uma estrutura de dados de busca rápida (como `Set` ou `Map`) para que o algoritmo execute em tempo linear.
2.  **Eficiência:** O teste inclui uma verificação de tempo para garantir que a solução é performática com grandes volumes de dados.

## 🚀 Comandos

```bash
npm install
npm test
```
