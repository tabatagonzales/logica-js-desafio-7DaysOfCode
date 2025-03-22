readme_content = """# Desafio Dia 3

## Problema
Crie um jogo interativo onde o usuário faça escolhas que influenciam o resultado final. O jogo deve incluir loops e condicionais.

## Abordagem
1. Solicitar ao usuário que escolha entre Front-End ou Back-End.
2. Permitir que ele escolha uma tecnologia específica dentro da área selecionada.
3. Perguntar se ele deseja se especializar ou se tornar Fullstack.
4. Oferecer a opção de adicionar tecnologias adicionais em um loop até que ele decida sair.
5. Exibir um resumo das escolhas feitas pelo usuário.

## Exemplo de Execução
Veja o arquivo `exemplo-saida.txt` para exemplos de entrada e saída esperados.
"""

with open("Dia3/README.md", "w") as readme_file:
    readme_file.write(readme_content)

print("Arquivo README.md preenchido com sucesso.")
