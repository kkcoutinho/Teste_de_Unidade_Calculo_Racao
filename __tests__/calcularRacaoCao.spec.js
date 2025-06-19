const { calcularRacaoCao } = require('../src/calculoRacao');
const massaPositiva = require('../fixtures/massaCalcularRacao.json');

describe('Função Calcular ração Cão', () => {
    // Teste positivo
    it('Deve calcular corretamente a ração para porte M e peso 4kg (esperado: 80g)', () => {
        const resultado = calcularRacaoCao('M', 4);
        expect(resultado).toBe(80);
    });

    // Teste negativo 
    it('Deve mostrar mensagem para porte inválido', () => {
        const resultado = calcularRacaoCao('X', 10);
        expect(resultado).toBeUndefined(); // ou null, dependendo de como tratou
    });

    // Teste negativo com lista de entradas inválidas
    const entradasInvalidas = [
        ['X', 10],   // porte inválido
        ['P', 0],    // peso zero
        ['M', -5],   // peso negativo
        ['G', 120],  // peso maior que 100
        ['Z', '30']  // peso como texto
    ];

    it.each(entradasInvalidas)(
        'Não deve calcular para porte "%s" e peso "%s"',
        (porte, peso) => {
            const resultado = calcularRacaoCao(porte, peso);
            expect(resultado).toBeUndefined();
        }
    );

    // Testes positivos a partir de arquivo JSON
    it.each(massaPositiva)(
        'Para porte %s e peso %d kg, retorna %d g de ração',
        ({ porte, peso, resultado }) => {
            expect(calcularRacaoCao(porte, peso)).toBe(resultado);
        }
    );
});