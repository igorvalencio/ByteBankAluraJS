import { Cliente } from "./Conta/Cliente.js";
import { Funcionario } from "./Funcionario/Funcionario.js";
import { Diretor } from "./Funcionario/Diretor.js";
import{ Gerente} from"./Funcionario/Gerente.js";
import { SistemaAutenticacao } from "./Funcionario/SistemaAutenticacao.js";
// import { ContaCorrente } from "./Conta/ContaCorrente.js";
// import { ContaPoupanca } from "./Conta/ContaPoupanca.js";

// // const cliente2 = new Cliente("Cecilia", 312456798);
// // const conta2 = new ContaCorrente(2, cliente2);
// // conta2.cliente = cliente2;

// const cliente1 = new Cliente("Igor", 32321654);
// const corrente1 = new ContaCorrente(1000, cliente1, 1);
// const poupanca1 = new ContaPoupanca(1000, cliente1, 1);
// console.log(cliente1)

const diretor1 = new Diretor("Igor", 6546548312, 10000000);
const Logado = SistemaAutenticacao.login(diretor1, "123")
console.log(diretor1)
