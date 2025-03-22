# Programa interativo para coletar informações do usuário e exibir mensagens personalizadas

# Perguntas iniciais
nome = input("Qual é o seu nome? ")
idade = input("Quantos anos você tem? ")
linguagem = input("Qual linguagem de programação você está estudando? ")

# Mensagem inicial
print(f"Olá {nome}, você tem {idade} anos e já está aprendendo {linguagem}!")

# Pergunta adicional
gosta_estudar = input(f"Você gosta de estudar {linguagem}? Responda com o número 1 para SIM ou 2 para NÃO: ")

# Resposta baseada na escolha
if gosta_estudar == "1":
    print("Muito bom! Continue estudando e você terá muito sucesso.")
elif gosta_estudar == "2":
    print("Ahh que pena... Já tentou aprender outras linguagens?")
else:
    print("Resposta inválida. Por favor, responda apenas com 1 ou 2.")

