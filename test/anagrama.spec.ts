import {Anagrama}  from "../src/anagrama"

describe("Anagrama", () => {
    
    it("validarSeEhAnagrama deve retornar true com amor e roma", async () => {  
        expect(Anagrama.validarSeEhAnagrama("amor", "roma")).toBe(true);
    });

    it(`validarSeEhAnagrama deve lançar um erro 'Palavras com tamanhos diferentes'`, async () => {  
        let functionCreateWithError = ()=>{Anagrama.validarSeEhAnagrama("chapeu","uepahcs")};    
        expect(functionCreateWithError).toThrow("Palavras com tamanhos diferentes");
    });

});