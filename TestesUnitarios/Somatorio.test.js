const { somatorio } = require('./Somatorio');

test('Somatório de 1 é 1', () => {
    expect(somatorio(1)).toBe(1);
});

test('Somatório de 3 é 6', () => {
    expect(somatorio(3)).toBe(6);
});
