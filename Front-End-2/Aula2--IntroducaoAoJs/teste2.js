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
    let inputUsuario = prompt("pedra,papel ou tesoura?").toLowerCase();
    console.log(inputUsuario);
    console.log(inputBot);
  
    if (
      (inputBot == "pedra" && inputUsuario == "papel") ||
      (inputBot == "papel" && inputUsuario == "tesoura") ||
      (inputBot == "tesoura" && inputUsuario == "pedra")
    ) {
      console.log("Você ganhou!!!");
      pontuacaoUsuario++;
    } else if (inputBot === inputUsuario) {
      console.log("Empatou");
    } else {
      console.log("Você perdeu!!!");
      pontuacaoBot++;
    }
    console.log(
      `pontuação usuario: ${pontuacaoUsuario}  pontuação bot: ${pontuacaoBot}`
    );
  }
  if (pontuacaoBot > pontuacaoUsuario) {
    console.log("computador ganhou");
  } else {
    console.log("você ganhou");
  }
  
  confirm("deseja jogar novamente?");