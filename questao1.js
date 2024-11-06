function isFibonacci(n) {
    let a = 0, b = 1, temp;
    
    if (n === 0 || n === 1) {
        return true;
    }

    while (b < n) {
        temp = b;
        b = a + b;
        a = temp;
    }

    return b === n;
}

const num = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci: "), 10);

if (isFibonacci(num)) {
    console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${num} NÃO pertence à sequência de Fibonacci.`);
}
