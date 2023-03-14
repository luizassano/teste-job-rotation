let string = "exemplo"; // string original
let novaString = ""; // string invertida

for(let i = string.length - 1; i >= 0; i--){ // percorre a string original de trás para frente
  novaString += string[i]; // adiciona cada caractere na nova string
}

console.log(novaString); // exibe a nova string invertida
