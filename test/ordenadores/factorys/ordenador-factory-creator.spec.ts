import { OrdenadorNativoAsc } from "../../../src/ordenadores/ordenador-nativo-asc";
import { TiposOrdenadores } from "../../../src/constants/tipos-ordenadores";
import { TiposOrdenadoresValidadores } from "../../../src/constants/tipos-ordenadores-validadores";
import { OrdenadorFactoryCreator } from "../../../src/ordenadores/factorys/ordenador-factory-creator";

describe("OrdenadorFactoryCreator", () => {
    
    it("OrdenadorFactoryCreator.Ordenador TiposOrdenadores.NATIVO_ASC deve retornar OrdenadorNativoAsc", async () => {  
        expect(OrdenadorFactoryCreator.Ordenador(TiposOrdenadores.NATIVO_ASC, TiposOrdenadoresValidadores.PADRAO)).toBeInstanceOf(OrdenadorNativoAsc);
    });

    it(`OrdenadorFactoryCreator.Ordenador TiposOrdenadores.NDF deve lançar o erro 'TiposOrdenadoresValidadores não definido.'`, async () => {  
        let functionCreateWithError = ()=>{OrdenadorFactoryCreator.Ordenador(TiposOrdenadores.NDF, TiposOrdenadoresValidadores.PADRAO)};    
        expect(functionCreateWithError).toThrow('TiposOrdenadores não definido.');
    });
});