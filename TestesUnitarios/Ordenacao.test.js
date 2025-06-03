const { quicksort } = require('./Ordenacao');

test('Array com um número continua igual', () => {
    const arr = [5];
    quicksort(arr, 0, arr.length - 1);
    expect(arr).toEqual([5]);
});

test('Array com dois elementos desordenados', () => {
    const arr = [9, 3];
    quicksort(arr, 0, arr.length - 1);
    expect(arr).toEqual([3, 9]);
});
