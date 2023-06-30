export class SistemaAutenticacao{
    static login(Funcionario, senha){
        return Funcionario.senha == senha;
    }
   
}