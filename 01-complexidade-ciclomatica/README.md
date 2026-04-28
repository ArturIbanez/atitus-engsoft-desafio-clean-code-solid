# 🧩 Desafio 01: Complexidade Ciclomática

A **Complexidade Ciclomática (CC)** mede a quantidade de caminhos independentes que o código pode seguir. Um código com CC alta é difícil de testar, entender e manter.

## 🎯 O Desafio

O arquivo `src/calcularDesconto.js` possui uma função com múltiplos `ifs` aninhados (Arrow Anti-pattern). Sua tarefa é refatorá-la para reduzir a carga cognitiva.

### Requisitos:
1.  **Reduza os níveis de indentação.**
2.  **Utilize Table-Driven Design:** Tente usar um objeto ou array para mapear as regras de negócio em vez de estruturas condicionais encadeadas.
3.  **Mantenha a funcionalidade:** Os testes em `tests/calcularDesconto.test.js` devem continuar passando.

## 🚀 Comandos

```bash
npm install
npm test
```
