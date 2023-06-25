import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
// const cliente2 = new Cliente("Cecilia", 312456798);
// const conta2 = new ContaCorrente(2, cliente2);
// conta2.cliente = cliente2;

const cliente1 = new Cliente("Igor", 32321654);
const conta1 = new ContaCorrente(1, cliente1);
const poupanca1 = new ContaPoupanca(100, cliente1, 1);

conta1.depositar(100)
conta1.sacar(50)




console.log(poupanca1)
console.log(conta1)







