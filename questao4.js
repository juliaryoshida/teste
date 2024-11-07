const faturamento = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53
};

const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

for (const estado in faturamento) {
  const valor = faturamento[estado];
  const percentual = (valor / totalFaturamento) * 100;
  console.log(`O percentual de faturamento de ${estado} é ${percentual.toFixed(2)}%`);
}
