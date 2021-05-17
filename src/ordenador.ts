export class Ordenador{

    static ascendente(palavra: string){
        if(palavra.length === 1){
            throw "Não somos palhaços para ordenar palavras de apenas 1 digito"
        }
        return palavra.split("").sort( (a, b) => a > b ? 1 : -1).join("");
    }

    static descendente(palavra: string){
        if(palavra.length === 1){
            throw "Não somos palhaços para ordenar palavras de apenas 1 digito"
        }
        return palavra.split("").sort( (a, b) => a > b ? -1 : 1).join("");
    }
    
  


}