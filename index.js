import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
// const cliente2 = new Cliente("Cecilia", 312456798);
// const conta2 = new ContaCorrente(2, cliente2);
// conta2.cliente = cliente2;

const cliente1 = new Cliente("Igor", 32321654);
const corrente1 = new ContaCorrente(1000, cliente1, 1);
const poupanca1 = new ContaPoupanca(1000, cliente1, 1);

corrente1.sacar(50)
poupanca1.sacar(50)



console.log(corrente1)
console.log(poupanca1)







