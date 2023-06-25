import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
       
const cliente1 = new Cliente("Igor", 32321654);
const cliente2 = new Cliente("Cecilia", 312456798);
const cliente2 = new Cliente("Cecilia", 312456798);


const conta1 = new ContaCorrente(1, cliente1);
conta1.cliente = cliente1;

const conta2 = new ContaCorrente(2, cliente2);
conta2.cliente = cliente2;
<<<<<<< HEAD
conta2.depositar(100)


=======
>>>>>>> eded784f097df86a2aaab1d61b17a9b4a7016c94

console.log(conta1,conta2)
console.log("Numero de contas criadas: " + ContaCorrente.numerodeContas)





