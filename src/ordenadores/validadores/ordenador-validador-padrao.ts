import { OrdenadorValidador } from "./ordenador-validador";

export class OrdenadorValidadorPadrao extends OrdenadorValidador{
    public validar(palavra){
        if(this.ehParamVazioNullOuTemApenasUmDigito(palavra)) throw "O parametro não pode ser nulo e deve ter mais de um digito."
    }

    private ehParamVazioNullOuTemApenasUmDigito(palavra:string){
        return !palavra || !palavra.length || palavra.length == 1;
    }
}