
import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
   constructor(SaldoInicial, cliente, agencia) {
      super(SaldoInicial, cliente, agencia)

   }

   sacar(valor) {
      let taxa = 1.20;
      return super._sacar(valor, taxa);
   }

}