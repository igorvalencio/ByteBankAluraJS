import { Cliente } from "./Cliente.js";

export class ContaCorrente {
     static numerodeContas = 0;
    agencia;
    _saldo=0;    
    constructor(agencia, cliente ){
         this.agencia = agencia;
         this._cliente = cliente; 
         ContaCorrente.numerodeContas++;  
    }
    _cliente;
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
         this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }
  
    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            return valor;
        }
    }
    depositar(valor) {
        if (valor <= 0) return
        {
            this._saldo += valor;
        }
    }

    transferir(valor, conta) {
        const ValorSacado = this.sacar(valor)
        conta.depositar(ValorSacado)
       
    }


}
    
