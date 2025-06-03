const { mdc } = require('./MDC');

test('MDC de dois números iguais', () => {
    expect(mdc(4, 4)).toBe(4);
});

test('MDC de 8 e 12 é 4', () => {
    expect(mdc(8, 12)).toBe(4);
});
