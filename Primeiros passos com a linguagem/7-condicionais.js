console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São paulo`,
    `Rio de Janeiro`,
)



const idadeComprador = 10;
const estaAcompanhada = true;
console.log(`Destinos possiveis:`);
// console.log(salvador, saoPaulo, rioDeJaneiro)   
console.log(listaDeDestinos)

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log(`Comprador maior de idades`)
    listaDeDestinos.splice(1, 1) // removendo item da lista
} else {
    console.log(`Comprador nao e maior de idade`)

}


// && siginifa e
// || siginifa OU










// if (idadeComprador >= 18) {
//     console.log(`Comprador maior de idades`)
//     listaDeDestinos.splice(1, 1) // removendo item da lista

// } else if (estaAcompanhada) {
//     console.log(`Comprador Esta acompanhado`)
//     listaDeDestinos.splice(1, 1) // removendo item da lista
// } else {
//     console.log(`Comprador nao e maior de idade`)

// }





console.log(listaDeDestinos)



