const fibonacci = require('./fibonacci');

test('Fibonacci de 0 deve retornar 0', () => {
  expect(fibonacci(0)).toBe(0);
});

test('Fibonacci de 1 deve retornar 1', () => {
  expect(fibonacci(1)).toBe(1);
});

test('Fibonacci de 5 deve retornar 5', () => {
  expect(fibonacci(5)).toBe(5);
});

test('Fibonacci de 10 deve retornar 55', () => {
  expect(fibonacci(10)).toBe(55);
});

test('Fibonacci com número negativo deve lançar erro', () => {
  expect(() => fibonacci(-3)).toThrow("Número inválido");
});
