import { AnagramaValidadorPadrao } from "../../../src/anagramas/validadores/anagrama-validador-padrao";
import { TiposAnagramaValidadores } from "../../../src/constants/tipos-anagrama-validadores";
import { AnagramaValidadorCreator } from "../../../src/anagramas/validadores/anagrama-validador-creator";

describe("AnagramaValidador", () => {
    
    it("create TiposAnagramaValidadores.PADRAO deve retornar uma instância AnagramaValidadorPadrao", async () => {  
        expect(AnagramaValidadorCreator.create(TiposAnagramaValidadores.PADRAO)).toBeInstanceOf(AnagramaValidadorPadrao);
    });

    it(`create TiposAnagramaValidadores.PADRAO deve lançar o erro 'TiposAnagramaValidadores não definido.'`, async () => {  
        let functionCreateWithError = ()=>{AnagramaValidadorCreator.create(TiposAnagramaValidadores.NDF)};    
        expect(functionCreateWithError).toThrow('TiposAnagramaValidadores não definido.');
    });
    
});