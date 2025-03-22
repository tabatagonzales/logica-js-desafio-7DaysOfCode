// Programa interativo para coletar informações do usuário e exibir mensagens personalizadas

const readline = require('readline');

// Configuração para entrada e saída via terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Perguntas ao usuário
rl.question("Qual é o seu nome? ", (nome) => {
    rl.question("Quantos anos você tem? ", (idade) => {
        rl.question("Qual linguagem de programação você está estudando? ", (linguagem) => {
            console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

            rl.question(`Você gosta de estudar ${linguagem}? Responda com 1 para SIM ou 2 para NÃO: `, (resposta) => {
                if (resposta === "1") {
                    console.log("Muito bom! Continue estudando e você terá muito sucesso.");
                } else if (resposta === "2") {
                    console.log("Ahh que pena... Já tentou aprender outras linguagens?");
                } else {
                    console.log("Resposta inválida. Por favor, responda apenas com 1 ou 2.");
                }
                rl.close();
            });
        });
    });
});
