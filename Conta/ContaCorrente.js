import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numerodeContas = 0;
    constructor(SaldoInicial, cliente, agencia){
        super(SaldoInicial, cliente, agencia);
        ContaCorrente.numerodeContas ++;

    }

    sacar(valor) {
        let taxa = 1.1;
       return super._sacar(valor, taxa);
    }
          
}