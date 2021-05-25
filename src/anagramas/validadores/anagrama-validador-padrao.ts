import { AnagramaValidador } from "./anagrama-validador";

export class AnagramaValidadorPadrao extends AnagramaValidador{
    public validar(palavra1, palavra2){
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