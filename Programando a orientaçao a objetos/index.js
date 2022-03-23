import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

// Constructor
const cliente1 = new Cliente("Pedro", 11122233309);
const cliente2 = new Cliente("Alice", 11122244409);
const contaCorrentePedro = new ContaCorrente(1001, cliente1);
contaCorrentePedro.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);




let valor = 200;
contaCorrentePedro.trasferir(200, conta2)

console.log(ContaCorrente.numeroDeContas)


