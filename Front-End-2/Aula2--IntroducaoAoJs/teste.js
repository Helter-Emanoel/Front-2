function choose(choices) {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
/*  */
let inputUsuario = "pedra";
let jokenpo = ["pedra", "papel", "tesoura"];

let pontuacaoUsuario = 0;
let pontuacaoBot = 0;

while (pontuacaoUsuario != 3 && pontuacaoBot != 3) {
  let inputBot = choose(jokenpo);
  let inputUsuario = prompt("Pedra, papel ou tesoura?").toLowerCase();
  console.log(inputUsuario);
  console.log(inputBot);

  if (
    (inputBot == "pedra" && inputUsuario == "papel") ||
    (inputBot == "papel" && inputUsuario == "tesoura") ||
    (inputBot == "tesoura" && inputUsuario == "pedra")
  ) {
    let ganhou = prompt("Você ganhou!!!");
    console.log(ganhou);
    pontuacaoUsuario++;
  } else if (inputBot === inputUsuario) {
    let empatou = prompt("Empatou.");
    console.log(empatou);
  } else {
    let perdeu = prompt("Você perdeu!!!");
    console.log(perdeu);
    pontuacaoBot++;
  }
  console.log(
    prompt(
      `pontuação usuario: ${pontuacaoUsuario}  pontuação bot: ${pontuacaoBot}`
    )
  );
}

if (pontuacaoBot > pontuacaoUsuario) {
  let bott = prompt("Computador ganhou!");

  console.log(bott);
} else {
  let jogador = prompt("Você ganhou!");
  console.log(jogador);
}

confirm("deseja jogar novamente?");
