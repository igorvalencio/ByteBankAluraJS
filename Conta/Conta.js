export class Conta {
    constructor(SaldoInicial, cliente, agencia)
    { 
        if(this.constructor == Conta){
            throw new Error("Não pode instanciar um objeto tipo Conta diretamente")
        }
        this._saldo = SaldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;


    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }
    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    //Metodo abstrato
    sacar(valor) {
        throw new Error("O metodo sacar é abstrato");
    }
    

    _sacar(valor, taxa) {
        const ValorSacado = taxa * valor;
        if (ValorSacado <= this._saldo) {
            this._saldo -= ValorSacado;
            return ValorSacado;
        }
        return 0;
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