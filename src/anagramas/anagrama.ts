import { Ordenador } from "../ordenadores/ordenador";
import { AnagramaValidador } from "./validadores/anagrama-validador";

export class Anagrama{

    constructor(private validador:AnagramaValidador, private ordenador:Ordenador){

    }

    public validar(palavra1, palavra2){
        this.validador.validar(palavra1, palavra2);
        return this.ordenador.ordenar(palavra1) == this.ordenador.ordenar(palavra2);
    }

}