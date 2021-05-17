export class Anagrama{

    static validarSeEhAnagrama(palavra1: string, palavra2: string): any{

        this.validarParametros(palavra1, palavra2);

        if (palavra2.split("").reverse().join("") === palavra1)
            return true;
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