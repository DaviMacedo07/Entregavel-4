const { isPrimo } = require('./NumeroPrimo');

test('Número 5 é primo', () => {
    const result = isPrimo(5);
    expect(result).toBe(true);
});

test('Número 10 não é primo', () => {
    const result = isPrimo(10);
    expect(result).toBe(false);
});
