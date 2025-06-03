const { contar } = require('./Contagem');

test('Contagem com um número dentro do intervalo', () => {
    expect(contar([1], 1)).toBe(1);
});

test('Contagem com valores menores que o início', () => {
    expect(contar([5, 1, 2], 3)).toBe(0);
});
