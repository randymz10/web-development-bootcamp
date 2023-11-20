function fibonacciGenerator(n) {
    let output = [];
    if( n === 1){
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];
        for (let i = 1; i <= n; i++) {
            let sum = output[i] + output[i - 1];
            output.push(sum);
            if (output.length === n) {break;};
        }
    }
    return output
}

console.log(fibonacciGenerator(5));
