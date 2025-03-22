# Dia 1: Comparação de Variáveis

Este dia aborda a comparação entre valores e tipos em JavaScript.

## Problema

Tarefa de hoje é reescrever o código abaixo de maneira que ele imprima as informações de maneira correta, que faça sentido e sem erros:

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (COMPARAR O numeroUm e a stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (COMPARAR O numeroTrinta e a stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (COMPARAR O numeroDez e a stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

O objetivo é verificar se duas variáveis possuem o mesmo valor e/ou tipo, exibindo mensagens apropriadas.

## Solução

O código implementado utiliza operadores de comparação (`==` e `===`) e o método `typeof` para validar os tipos das variáveis.

## Estrutura

- `desafio-dia7.js`: Arquivo contendo o código da solução.
- `exemplo-saida.txt`: Arquivo com exemplos de entrada e saída esperados.
