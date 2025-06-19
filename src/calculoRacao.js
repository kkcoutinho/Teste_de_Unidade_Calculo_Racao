function calcularRacaoCao (porte, peso) {
  if (porte !== 'P' && porte !== 'M' && porte !== 'G') {
    console.log('Porte inválido');
    return;
  }

  if (peso <= 0 || peso > 100) {
    console.log('Peso inválido');
    return;
  }

  if (porte === 'P') return peso * 10;
  if (porte === 'M') return peso * 20;
  if (porte === 'G') return peso * 30;
}

// Funções antigas 
let caoP = (kg) => kg * 10;
let caoM = (kg) => kg * 20;
let caoG = (kg) => kg * 30;

module.exports = {
  calcularRacaoCao,
  caoP,
  caoM,
  caoG
};