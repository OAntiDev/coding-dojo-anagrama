import { OrdenadorValidadorPadrao } from "../../../src/ordenadores/validadores/ordenador-validador-padrao";
import { TiposOrdenadoresValidadores } from "../../../src/constants/tipos-ordenadores-validadores";
import { OrdenadorValidadorCreator } from "../../../src/ordenadores/validadores/ordenador-validador-creator";

describe("OrdenadorValidador", () => {
    
    it("create TiposOrdenadoresValidadores.PADRAO deve retornar uma instância OrdenadorValidadorPadrao", async () => {  
        expect(OrdenadorValidadorCreator.create(TiposOrdenadoresValidadores.PADRAO)).toBeInstanceOf(OrdenadorValidadorPadrao);
    });

    it(`create TiposOrdenadoresValidadores.PADRAO deve lançar o erro 'TiposOrdenadoresValidadores não definido.'`, async () => {  
        let functionCreateWithError = ()=>{OrdenadorValidadorCreator.create(TiposOrdenadoresValidadores.NDF)};    
        expect(functionCreateWithError).toThrow('TiposOrdenadoresValidadores não definido.');
    });
    
});