import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
       
const cliente1 = new Cliente();
cliente1.nome = "Igor";
cliente1.cpf = 234342243

const cliente2 = new Cliente();
cliente2.nome = "Cecilia";
cliente2.cpf = 43432243;

const conta1 = new ContaCorrente();
conta1.agencia =1
conta1.cliente = cliente1;
conta1.depositar(100)


const conta2 = new ContaCorrente();
conta2.agencia =2
conta2.cliente = cliente2;
conta2.depositar(100)

conta1.transferir(100, conta2)

console.log(conta1, conta2)




