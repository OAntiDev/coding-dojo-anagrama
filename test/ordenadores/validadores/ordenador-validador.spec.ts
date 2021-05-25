import { TiposOrdenadoresValidadores } from "../../../src/constants/tipos-ordenadores-validadores";
import { OrdenadorValidadorPadrao } from "../../../src/ordenadores/validadores/ordenador-validador-padrao";

describe("OrdenadorValidador", () => {
    
    it("create TiposOrdenadoresValidadores.PADRAO deve retornar uma instância OrdenadorValidadorPadrao", async () => {  
        expect(OrdenadorValidadorPadrao.create(TiposOrdenadoresValidadores.PADRAO)).toBeInstanceOf(OrdenadorValidadorPadrao);
    });

    it(`create TiposOrdenadoresValidadores.PADRAO deve lançar o erro 'TiposOrdenadoresValidadores não definido.'`, async () => {  
        let functionCreateWithError = ()=>{OrdenadorValidadorPadrao.create(TiposOrdenadoresValidadores.NDF)};    
        expect(functionCreateWithError).toThrow('TiposOrdenadoresValidadores não definido.');
    });
    
});