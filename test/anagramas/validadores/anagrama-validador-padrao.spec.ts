import { AnagramaValidador } from "../../../src/anagramas/validadores/anagrama-validador";
import { AnagramaValidadorPadrao } from "../../../src/anagramas/validadores/anagrama-validador-padrao";

describe("AnagramValidadorPadrao", () => {
    let validadorPadrao:AnagramaValidadorPadrao;
    beforeEach(()=>{
        validadorPadrao = new AnagramaValidadorPadrao();
    });

    it("AnagramaValidadorPadrao deve herdar de AnagramaValidador", async () => {  
        expect(validadorPadrao).toBeInstanceOf(AnagramaValidador);
    });

    it(`validar deve lançar um erro 'Palavras com tamanhos diferentes'`, async () => {  
        let functionCreateWithError = ()=>{validadorPadrao.validar("chapeu","uepahcs")};    
        expect(functionCreateWithError).toThrow("Palavras com tamanhos diferentes");
    });

    it(`validar deve lançar um erro 'Parametro 1 inválido, pois está vazio ou nulo'`, async () => {  
        let functionCreateWithError = ()=>{validadorPadrao.validar("","uepahcs")};    
        expect(functionCreateWithError).toThrow('Parametro 1 inválido, pois está vazio ou nulo');
    });

    it(`validar deve lançar um erro 'Parametro 1 inválido, pois está vazio ou nulo'`, async () => {  
        let functionCreateWithError = ()=>{validadorPadrao.validar(null,"uepahcs")};    
        expect(functionCreateWithError).toThrow('Parametro 1 inválido, pois está vazio ou nulo');
    });

    it(`validar deve lançar um erro 'Parametro 2 inválido, pois está vazio ou nulo'`, async () => {  
        let functionCreateWithError = ()=>{validadorPadrao.validar("chapeu","")};    
        expect(functionCreateWithError).toThrow('Parametro 2 inválido, pois está vazio ou nulo');
    });

    it(`validar deve lançar um erro 'Parametro 2 inválido, pois está vazio ou nulo'`, async () => {  
        let functionCreateWithError = ()=>{validadorPadrao.validar("chapeu", null)};    
        expect(functionCreateWithError).toThrow('Parametro 2 inválido, pois está vazio ou nulo');
    });

    it(`validar deve lançar um erro 'Não somos palhaços para validar anagramas de apenas 1 digito'`, async () => {  
        let functionCreateWithError = ()=>{validadorPadrao.validar("a", "a")};    
        expect(functionCreateWithError).toThrow('Não somos palhaços para validar anagramas de apenas 1 digito');
    });

    it("validar deve funcionar corretamente sem lançar erro nenhum", async () => {
        let functionNotError = ()=>{validadorPadrao.validar('carro', "orrac")};    
        expect(functionNotError).not.toThrow();
    });
    
});