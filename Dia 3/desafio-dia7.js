// Solução do desafio Dia 3
function jogoInterativo() {
    alert("Bem-vindo ao jogo de escolhas na programação!");

    // Escolha inicial: Front-End ou Back-End
    let area = prompt("Você quer seguir para a área de Front-End ou Back-End?");
    let tecnologia;

    if (area.toLowerCase() === "front-end") {
        tecnologia = prompt("Você quer aprender React ou Vue?");
    } else if (area.toLowerCase() === "back-end") {
        tecnologia = prompt("Você quer aprender C# ou Java?");
    } else {
        alert("Escolha inválida. Encerrando o jogo.");
        return;
    }

    // Escolha de especialização
    let especializacao = prompt("Você quer se especializar na área escolhida ou se tornar Fullstack?");

    // Lista de tecnologias adicionais
    let tecnologias = [];
    while (true) {
        let novaTecnologia = prompt(
            "Tem mais alguma tecnologia que você gostaria de aprender? (Digite 'sair' para encerrar):"
        );
        if (novaTecnologia.toLowerCase() === "sair") break;
        tecnologias.push(novaTecnologia);
        alert(`Interessante! Você adicionou ${novaTecnologia} à sua lista.`);
    }

    // Resumo final
    alert("Resumo das suas escolhas:");
    console.log(`Área escolhida: ${area}`);
    console.log(`Tecnologia escolhida: ${tecnologia}`);
    console.log(`Especialização: ${especializacao}`);
    console.log("Tecnologias adicionais:");
    tecnologias.forEach((tech) => console.log(`- ${tech}`));
}

// Executar o jogo
jogoInterativo();
