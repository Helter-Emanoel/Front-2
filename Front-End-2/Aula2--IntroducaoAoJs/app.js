alert('Olá visitante!');

alert('Que bom que você aprendeu... Ebaa!!!');

let resultado = confirm('Deseja realmente excluir este cliente?');

let nome = prompt('Digite seu nome: ');

alert('Olá' + ' ' + nome);

document.querySelector('h1').innerText += ' ' + nome;

let tratamentoPersonalizado = confirm('Deseja um tratamento personalizado?')

if (tratamentoPersonalizado) {
    let nome = prompt('Por favor digite seu nome:')
    alert(`Bem-vindo ao nosso site ${nome}.`)
} else {
    alert('Obrigado por conectar!')
}

let numeros = {
    primeiro: 22,
    segundo: 32,
    terceiro: 65
}

for(let propriedades in numeros) {
    console.table(propriedades + ' ' + numeros[propriedades])
}

let lista = ['Helter', 23, 'solteiro', 'programador'];

for(let value of lista){
    console.log(value)
}