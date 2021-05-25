import { Ordenador } from "./ordenador";

export class Anagrama{

    static validarSeEhAnagrama(palavra1: string, palavra2: string): any{

        this.validarParametros(palavra1, palavra2);

        return Ordenador.ascendente(palavra1) == Ordenador.ascendente(palavra2);
    };

    static validarParametros(palavra1: string, palavra2: string){

        if(palavra1 == null || palavra1.trim() === ""){
            throw 'Parametro 1 inválido, pois está vazio ou nulo'
        }
        
        if(palavra2 == null || palavra2.trim() === ""){
            throw 'Parametro 2 inválido, pois está vazio ou nulo'
        }

        if(palavra1.length === 1 && palavra2.length === 1){
            throw "Não somos palhaços para validar anagramas de apenas 1 digito"
        }
        
        if(palavra1.length != palavra2.length){
            throw "Palavras com tamanhos diferentes";
        }
    }
}