import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
       
const cliente1 = new Cliente();
cliente1.nome = "Igor";
cliente1.cpf = 234342243

const cliente2 = new Cliente();
cliente2.nome = "Cecilia";
cliente2.cpf = 43432243;

const contacorrente1 = new ContaCorrente();
contacorrente1.cliente = cliente1
contacorrente1.agencia =1
contacorrente1.depositar(100)


const contacorrente2 = new ContaCorrente();
contacorrente2.cliente = cliente2;
contacorrente2.agencia = 2
contacorrente2.depositar(100)

contacorrente1.transferir(50, contacorrente2)
console.log(contacorrente1, contacorrente2)

