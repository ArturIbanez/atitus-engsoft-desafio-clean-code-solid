# 🏛️ Desafio 03: SOLID (SRP & DIP)

O design orientado a objetos robusto depende de princípios que garantam o baixo acoplamento e a alta coesão.

## 🎯 O Desafio

O arquivo `src/SistemaDeVendas.js` é um exemplo de **Script Monolítico** ou "Objeto Deus". Ele mistura validação, cálculo de impostos/descontos, persistência e notificação.

### Requisitos:
1.  **SRP (Single Responsibility Principle):** Separe a lógica em classes menores (ex: `Pedido`, `VendasRepository`, `NotificadorService`).
2.  **DIP (Dependency Inversion Principle):** O orquestrador da venda não deve criar instâncias de serviços de infraestrutura (como o banco ou e-mail). Ele deve receber essas dependências via **Injeção de Dependência**.
3.  **Testabilidade:** O código refatorado deve ser fácil de testar isoladamente.

## 🚀 Comandos

```bash
npm install
npm test
```
