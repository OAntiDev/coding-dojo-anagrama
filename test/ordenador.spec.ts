import {Ordenador}  from "../src/ordenador"

describe("Ordenador", () => {

    it(`ascendente deve retornar a palavra ordenada de forma ascendente'`, async () => {    
        expect(Ordenador.ascendente("palavra")).toBe("aaalprv");
    });

    it(`ascendente deve lançar um erro 'Não somos palhaços para ordenar palavras de apenas 1 digito'`, async () => {  
        let functionCreateWithError = ()=>{Ordenador.ascendente("p")};    
        expect(functionCreateWithError).toThrow('Não somos palhaços para ordenar palavras de apenas 1 digito');
    });

    it(`descendente deve retornar a palavra ordenada de forma ascendente'`, async () => {    
        expect(Ordenador.descendente("palavra")).toBe("vrplaaa");
    });

    it(`descendente deve lançar um erro 'Não somos palhaços para ordenar palavras de apenas 1 digito'`, async () => {  
        let functionCreateWithError = ()=>{Ordenador.descendente("p")};    
        expect(functionCreateWithError).toThrow('Não somos palhaços para ordenar palavras de apenas 1 digito');
    });

    it(`ascedente deve ordenar removendo os espaços`, async () => {  
        expect(Ordenador.ascendente("papo reto")).toBe('aeoopprt');
    });

    it(`descedente deve ordenar removendo os espaços`, async () => {  
        expect(Ordenador.descendente("papo reto")).toBe('trppooea');
    });

});