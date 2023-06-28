
import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
   constructor(SaldoInicial, cliente, agencia) {
      super(SaldoInicial, cliente, agencia)

   }

   sacar(valor)
   
    {
      let taxa = 1.20;
      const ValorSacado = taxa * valor;
         if (valor <= this._saldo) {
             this._saldo -= valor;
             return valor;
         }
     }

}