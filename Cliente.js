export class Cliente {
    static NumeroDeClientes = 0;
    nome;
    _cpf;
    get cpf() {
        return this._cpf;
    }
    constructor(nome, cpf) {
        this._cpf = cpf;
        this.nome = nome;
        Cliente.NumeroDeClientes++;
    }

}