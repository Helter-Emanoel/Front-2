function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

let jogo = confirm("Quer jogar Jokenpo?");
let nome = prompt("Qual é o seu nome:");
let opcoesParaUsuario = prompt(
  `Escolha sua opção: 1 = ${pedra}, 2 = ${papel}, 3 = ${tesoura}`
);
let bot = random(1, 3);
let pedra = 1;
let papel = 2;
let tesoura = 3;
let pontosBot = 0;
let pontosUsuario = 0;

if (jogo === true) {
  console.log(opcoesParaUsuario);
} else {
  console.log(jogo);
}

if (pontosBot != 3 && pontosUsuario != 3) {
  console.log(opcoesParaUsuario);
  console.log(bot);
} else if (
  (bot === 1 && opcoesParaUsuario === papel) ||
  (bot === 2 && opcoesParaUsuario === tesoura) ||
  (bot === 3 && opcoesParaUsuario === pedra)
) {
  console, log(prompt("O robô venceu ;/"));
  pontosBot++;
} else if (bot === opcoesParaUsuario) {
  console.log(prompt("Empatou."));
} else {
  console.log(prompt(`você ${nome} venceu!!!`));
  pontosUsuario++;
}
