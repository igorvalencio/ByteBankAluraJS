import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    
    _cliente;
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
         this._cliente = novoValor;
        }
    }
    get cliente(){
        return this._cliente;
    }
    agencia;
    _saldo=0;
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
    
