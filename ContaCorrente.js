export class ContaCorrente 
{
    cliente;
    agencia;
    _saldo = 0;
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

     transferir(valor, conta)
     {
        const ValorSacado = this.sacar(valor);
        conta.depositar(ValorSacado);
     }
    
}