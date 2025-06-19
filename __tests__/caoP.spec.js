const calculoracao = require('../src/calculoRacao');
const massaCaoP = require('../fixtures/massaCaoP.json');

describe('Cálculo de ração para cães pequenos', () => {
  it('Deve calcular corretamente a quantidade de ração para cada caso de teste', () => {
    massaCaoP.forEach(({ kg, resultado }) => {
      const calculado = calculoracao.caoP(kg);
      expect(calculado).toBe(resultado);
    });
  });
});