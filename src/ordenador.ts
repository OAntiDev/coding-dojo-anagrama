export class Ordenador{

    static ascendente(palavra: string){
        palavra = palavra.replace(/\s/g, "");
        console.log(palavra)
        if(palavra.length === 1){
            throw "Não somos palhaços para ordenar palavras de apenas 1 digito"
        }
        return palavra.split("").sort( (a, b) => a > b ? 1 : -1).join("");
    }

    static descendente(palavra: string){
        palavra = palavra.replace(/\s/g, "");
        console.log(palavra)
        if(palavra.length === 1){
            throw "Não somos palhaços para ordenar palavras de apenas 1 digito"
        }
        return palavra.split("").sort( (a, b) => a > b ? -1 : 1).join("");
    }
    
}