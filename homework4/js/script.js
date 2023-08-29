function calculateFactorial(n) {
    if (n != 1) {
        return n *= calculateFactorial(n - 1);
    } 
    return 1;
}

let result = calculateFactorial(2);
console.log(result);