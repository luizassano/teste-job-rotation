function testeFibonacci(num) {
  let fibonacci = [0, 1];
  let i = 1;

  while (fibonacci[i] < num) {
    i++;
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  if (fibonacci[i] === num) {
    console.log(num + " pertence à sequência de Fibonacci.");
  } else {
    console.log(num + " não pertence à sequência de Fibonacci.");
  }
}

verificaFibonacci(5); // imprime "5 pertence à sequência de Fibonacci."
verificaFibonacci(7); // imprime "7 não pertence à sequência de Fibonacci."