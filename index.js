import { Cliente } from "./Conta/Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

// const cliente2 = new Cliente("Cecilia", 312456798);
// const conta2 = new ContaCorrente(2, cliente2);
// conta2.cliente = cliente2;

const cliente1 = new Cliente("Igor", 32321654);
const corrente1 = new ContaCorrente(1000, cliente1, 1);
const poupanca1 = new ContaPoupanca(1000, cliente1, 1);




console.log(cliente1)