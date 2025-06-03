function contar(arr, N) {
    let count = 0;
    for (let num of arr) {
        if (num >= arr[0] && num <= N) {
            count++;
        }
    }
    return count;
}

module.exports = { contar };