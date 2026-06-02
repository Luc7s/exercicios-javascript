# 📚 Exercícios de JavaScript — Base

Lista de exercícios para praticar os fundamentos de JavaScript, do zero ao
intermediário. Pensada para estudo em **turma/equipe**.

## Como usar

- Faça os exercícios **na ordem** — cada nível assume o anterior.
- Para cada exercício, crie uma função que resolva o problema e teste com os
  exemplos dados (`// entrada → // saída esperada`).
- Para rodar no navegador: abra o **Console** (F12 → aba *Console*) e cole seu código.
- Para rodar localmente: salve em um arquivo `.js` e execute com `node arquivo.js`.
- 💡 As **dicas** estão lá para quando você travar — tente sem elas primeiro.

### Convenção de teste rápido

Use `console.log` comparando com o esperado:

```js
function dobro(n) {
  return n * 2;
}

console.log(dobro(5)); // esperado: 10
```

---

## 🟢 Nível 1 — Variáveis, tipos e operadores

### 1. Olá, mundo
Crie uma variável com seu nome e imprima `"Olá, <nome>!"`.
```
nome = "Ana"  →  "Olá, Ana!"
```
> 💡 Use template strings: `` `Olá, ${nome}!` ``

### 2. Soma simples
Crie uma função que receba dois números e retorne a soma.
```
soma(3, 4)  →  7
```

### 3. Conversão de temperatura
Converta Celsius para Fahrenheit. Fórmula: `F = C * 9/5 + 32`.
```
celsiusParaF(30)  →  86
celsiusParaF(0)   →  32
```

### 4. Par ou ímpar
Retorne `"par"` ou `"ímpar"` para um número.
```
parOuImpar(4)  →  "par"
parOuImpar(7)  →  "ímpar"
```
> 💡 Use o operador resto `%`. Se `n % 2 === 0`, é par.

### 5. Área do retângulo
Calcule a área a partir de base e altura.
```
area(4, 5)  →  20
```

### 6. Troca de valores
Troque os valores de duas variáveis sem perder dados.
```
a = 1, b = 2  →  a = 2, b = 1
```
> 💡 Em JS: `[a, b] = [b, a]`

### 7. Maior de dois
Retorne o maior entre dois números.
```
maior(8, 3)  →  8
```

---

## 🟢 Nível 2 — Condicionais

### 8. Maior de três
Retorne o maior entre três números.
```
maior3(2, 9, 5)  →  9
```

### 9. Sinal do número
Retorne `"positivo"`, `"negativo"` ou `"zero"`.
```
sinal(-3)  →  "negativo"
sinal(0)   →  "zero"
```

### 10. Aprovado ou reprovado
Dada uma nota (0–10), retorne `"Aprovado"` se ≥ 6, senão `"Reprovado"`.
```
situacao(7)  →  "Aprovado"
situacao(4)  →  "Reprovado"
```

### 11. Classificador de idade
Retorne `"criança"` (0–11), `"adolescente"` (12–17), `"adulto"` (18–59) ou `"idoso"` (60+).
```
faixa(15)  →  "adolescente"
faixa(70)  →  "idoso"
```

### 12. Ano bissexto
Verifique se um ano é bissexto.
```
bissexto(2024)  →  true
bissexto(2023)  →  false
```
> 💡 É bissexto se divisível por 4 **e** (não por 100 **ou** por 400).

### 13. Calculadora
Receba dois números e um operador (`"+"`, `"-"`, `"*"`, `"/"`) e retorne o resultado.
```
calc(6, 2, "*")  →  12
calc(6, 0, "/")  →  "Erro: divisão por zero"
```

---

## 🟡 Nível 3 — Laços (loops)

### 14. Contagem
Imprima os números de 1 a 100.

### 15. Tabuada
Imprima a tabuada de um número (de 1 a 10).
```
tabuada(3)  →  3, 6, 9, ... 30
```

### 16. Soma do intervalo
Some todos os números de 1 até N.
```
somaAte(5)  →  15
```

### 17. Fatorial
Calcule o fatorial de um número (`n! = n * (n-1) * ... * 1`).
```
fatorial(5)  →  120
fatorial(0)  →  1
```

### 18. FizzBuzz
De 1 a 100: imprima `"Fizz"` (múltiplos de 3), `"Buzz"` (múltiplos de 5),
`"FizzBuzz"` (ambos) ou o próprio número.
```
... 13, 14, FizzBuzz, 16 ...
```

### 19. Fibonacci
Imprima os primeiros N termos da sequência (`0, 1, 1, 2, 3, 5, 8...`).
```
fibonacci(6)  →  [0, 1, 1, 2, 3, 5]
```

### 20. Número primo
Verifique se um número é primo.
```
ehPrimo(7)  →  true
ehPrimo(8)  →  false
```

### 21. Inverter número
Inverta os dígitos de um número.
```
inverter(123)  →  321
```

---

## 🟡 Nível 4 — Strings

### 22. Tamanho da string
Conte os caracteres de um texto.
```
tamanho("javascript")  →  10
```

### 23. Inverter string
Inverta um texto.
```
inverterStr("abc")  →  "cba"
```
> 💡 `texto.split("").reverse().join("")`

### 24. Contar vogais
Conte quantas vogais existem numa frase.
```
contarVogais("educação")  →  5
```

### 25. Palíndromo
Verifique se uma palavra é igual lida de trás pra frente.
```
ehPalindromo("arara")  →  true
ehPalindromo("casa")   →  false
```

### 26. Capitalizar
Deixe a primeira letra de cada palavra maiúscula.
```
capitalizar("ola mundo")  →  "Ola Mundo"
```

### 27. Contar palavras
Conte quantas palavras há numa frase.
```
contarPalavras("um dois tres")  →  3
```

### 28. Remover espaços
Remova todos os espaços de um texto.
```
semEspacos("a b c")  →  "abc"
```

---

## 🟠 Nível 5 — Arrays

### 29. Soma do array
Some todos os elementos.
```
somaArray([1, 2, 3, 4])  →  10
```
> 💡 `array.reduce((acc, n) => acc + n, 0)`

### 30. Média
Calcule a média dos valores.
```
media([2, 4, 6])  →  4
```

### 31. Maior e menor
Encontre o maior e o menor valor.
```
maiorMenor([3, 8, 1, 5])  →  { maior: 8, menor: 1 }
```
> 💡 `Math.max(...array)` e `Math.min(...array)`

### 32. Filtrar pares
Retorne só os números pares.
```
pares([1, 2, 3, 4, 5, 6])  →  [2, 4, 6]
```
> 💡 `array.filter(...)`

### 33. Dobrar valores
Retorne um novo array com cada valor multiplicado por 2.
```
dobrar([1, 2, 3])  →  [2, 4, 6]
```
> 💡 `array.map(...)`

### 34. Remover duplicados
Retorne um array sem valores repetidos.
```
unicos([1, 2, 2, 3, 3, 3])  →  [1, 2, 3]
```
> 💡 `[...new Set(array)]`

### 35. Ordenar
Ordene um array de números em ordem crescente.
```
ordenar([3, 1, 2])  →  [1, 2, 3]
```
> 💡 `array.sort((a, b) => a - b)`

### 36. Buscar elemento
Retorne a posição (índice) de um valor, ou `-1` se não existir.
```
buscar([10, 20, 30], 20)  →  1
buscar([10, 20, 30], 99)  →  -1
```

### 37. Contar ocorrências
Conte quantas vezes um valor aparece.
```
ocorrencias([1, 2, 2, 3, 2], 2)  →  3
```

---

## 🟠 Nível 6 — Funções e objetos

### 38. Função saudação
Receba um nome e retorne uma saudação.
```
saudacao("Bia")  →  "Olá, Bia"
```

### 39. É maior de idade
Receba uma idade e retorne `true`/`false`.
```
maiorDeIdade(20)  →  true
maiorDeIdade(15)  →  false
```

### 40. Objeto pessoa
Crie um objeto com `nome`, `idade` e `email`, e imprima cada propriedade.
```
{ nome: "Léo", idade: 28, email: "leo@email.com" }
```

### 41. Lista de tarefas
Dado um array de objetos `{ tarefa, concluida }`, conte quantas estão concluídas.
```
[{ tarefa: "A", concluida: true }, { tarefa: "B", concluida: false }]  →  1
```

### 42. Agrupar por propriedade
Dado um array de objetos, agrupe-os por uma propriedade.
```
agruparPorIdade([{nome:"A", idade:20}, {nome:"B", idade:20}, {nome:"C", idade:30}])
→  { 20: ["A", "B"], 30: ["C"] }
```

### 43. Calculadora com objeto
Crie um objeto `calc` com métodos `somar`, `subtrair`, `multiplicar`, `dividir`.
```
calc.somar(2, 3)       →  5
calc.multiplicar(4, 2) →  8
```

---

## 🔴 Nível 7 — Desafios de fixação

### 44. Validar senha
Verifique se a senha tem **mínimo 8 caracteres**, **1 número** e **1 letra maiúscula**.
```
validarSenha("Abc12345")  →  true
validarSenha("abc")       →  false
```

### 45. Jogo da adivinhação
Sorteie um número de 1 a 100 (`Math.floor(Math.random() * 100) + 1`) e, a cada
palpite, diga se o número secreto é **maior** ou **menor**.

### 46. Conversor de moeda
Converta reais em dólar dada uma taxa.
```
realParaDolar(100, 5)  →  20
```

### 47. Contador de frequência
Conte a frequência de cada letra numa palavra (retorne um objeto).
```
frequencia("banana")  →  { b: 1, a: 3, n: 2 }
```

### 48. Anagrama
Verifique se duas palavras são anagramas (mesmas letras, ordem diferente).
```
ehAnagrama("amor", "roma")  →  true
ehAnagrama("casa", "siri")  →  false
```

### 49. Maior palavra
Dada uma frase, retorne a palavra mais longa.
```
maiorPalavra("o gato dorme tranquilamente")  →  "tranquilamente"
```

### 50. Pirâmide de asteriscos
Imprima uma pirâmide com N linhas.
```
piramide(3)
→  *
   **
   ***
```

---

## 🎯 Próximos passos (depois de terminar)

- **Métodos de array encadeados**: combine `map`, `filter` e `reduce` num mesmo problema.
- **Assíncrono**: estude `setTimeout`, Promises e `async/await`.
- **DOM**: manipule uma página HTML (botões, inputs, listas).
- **Projeto final**: monte uma to-do list ou uma calculadora completa juntando tudo.

> Bons estudos! 🚀
