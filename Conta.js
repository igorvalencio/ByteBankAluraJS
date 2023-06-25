export class Conta {
    constructor(SaldoInicial, cliente, agencia){
        this._saldo = SaldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }
   
   
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

    let taxa = 1;
    const ValorSacado = taxa * valor;
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