function inverterString(str) {
  let strInvertida = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
  }
  
  return strInvertida;
}

const minhaString = "JavaScript";

const resultado = inverterString(minhaString);
console.log("String invertida:", resultado);
