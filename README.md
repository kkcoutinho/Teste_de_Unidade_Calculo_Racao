# 🐾 Projeto: Cálculo de Ração para Cães

Aplicação desenvolvida em JavaScript para calcular automaticamente a quantidade 
de ração diária que um cão deve consumir, com base no seu **porte** e **peso**.

---

## Regras de Cálculo

A lógica de cálculo segue a tabela abaixo:

| Porte | Fator por quilo | Fórmula usada         | Exemplo         |
|-------|------------------|------------------------|------------------|
| P     | 10g por kg       | peso × 10              | 2kg → 20g        |
| M     | 20g por kg       | peso × 20              | 4kg → 80g        |
| G     | 30g por kg       | peso × 30              | 10kg → 300g      |

---

### 📁 Estrutura do Projeto

```
├── src/
│   └── calculoRacao.js     ← Função principal
├── __tests__/
│   └── calcularRacaoCao.spec.js  ← Testes com Jest
├── fixtures/
│   └── massaCalcularRacao.json  ← Casos positivos
├── .gitignore
└── package.json
```

---

### Regras de Validação

- Porte deve ser `'P'`, `'M'` ou `'G'`
- Peso deve ser maior que **0** e no máximo **100**
- Em caso de dados inválidos, a função retorna `undefined`

---

### Rodando os testes

1. Instale as dependências (caso ainda não tenha):

```bash
npm install
```

2. Execute os testes com:

```bash
npx jest
```

---

### Cobertura de Testes

- [x] Teste positivo direto na função
- [x] Testes negativos com lista de entradas inválidas
- [x] Testes positivos usando massa de dados JSON

---
​   ​   ​    ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​     ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​   ​