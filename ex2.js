let opcao = "";
let numero = 0;

do {
    numero = parseInt(prompt("Digite um número"));

    numero = numero * 2
    console.log(`O dobro deste número é, ${numero}`)
    console.log("Deseja sair?")
    opcao = prompt("Digite 'S' para Sim e 'N' para Não")
}
while (!(opcao == "S" || opcao == "s"))
   

console.log("--------Até Logo!-------");