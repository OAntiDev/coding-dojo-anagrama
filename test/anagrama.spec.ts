import {Anagrama}  from "../src/anagrama"

describe("Anagrama", () => {
    
    it("validarSeEhAnagrama deve retornar true com amor e roma", async () => {  
        expect(Anagrama.validarSeEhAnagrama("amor", "roma")).toBe(true);
    });

    it(`validarSeEhAnagrama deve lançar um erro 'Palavras com tamanhos diferentes'`, async () => {  
        let functionCreateWithError = ()=>{Anagrama.validarSeEhAnagrama("chapeu","uepahcs")};    
        expect(functionCreateWithError).toThrow("Palavras com tamanhos diferentes");
    });

    it(`validarSeEhAnagrama deve lançar um erro 'Parametro 1 inválido, pois está vazio ou nulo'`, async () => {  
        let functionCreateWithError = ()=>{Anagrama.validarSeEhAnagrama("","uepahcs")};    
        expect(functionCreateWithError).toThrow('Parametro 1 inválido, pois está vazio ou nulo');
    });

    it(`validarSeEhAnagrama deve lançar um erro 'Parametro 1 inválido, pois está vazio ou nulo'`, async () => {  
        let functionCreateWithError = ()=>{Anagrama.validarSeEhAnagrama(null,"uepahcs")};    
        expect(functionCreateWithError).toThrow('Parametro 1 inválido, pois está vazio ou nulo');
    });

    it(`validarSeEhAnagrama deve lançar um erro 'Parametro 2 inválido, pois está vazio ou nulo'`, async () => {  
        let functionCreateWithError = ()=>{Anagrama.validarSeEhAnagrama("chapeu","")};    
        expect(functionCreateWithError).toThrow('Parametro 2 inválido, pois está vazio ou nulo');
    });

    it(`validarSeEhAnagrama deve lançar um erro 'Parametro 2 inválido, pois está vazio ou nulo'`, async () => {  
        let functionCreateWithError = ()=>{Anagrama.validarSeEhAnagrama("chapeu", null)};    
        expect(functionCreateWithError).toThrow('Parametro 2 inválido, pois está vazio ou nulo');
    });

    it(`validarSeEhAnagrama deve lançar um erro 'Não somos palhaços para validar anagramas de apenas 1 digito'`, async () => {  
        let functionCreateWithError = ()=>{Anagrama.validarSeEhAnagrama("a", "a")};    
        expect(functionCreateWithError).toThrow('Não somos palhaços para validar anagramas de apenas 1 digito');
    });

});