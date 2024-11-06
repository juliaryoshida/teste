function countA(str) {
    let count = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            count++;
        }
    }

    return count;
}

const inputString = prompt("Digite uma string: "); 

const count = countA(inputString);

if (count > 0) {
    console.log(`A letra 'a' (maiúscula ou minúscula) aparece ${count} vez(es) na string.`);
} else {
    console.log("A letra 'a' (maiúscula ou minúscula) NÃO foi encontrada na string.");
} 
