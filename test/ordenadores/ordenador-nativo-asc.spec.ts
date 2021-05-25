import { OrdenadorNativoAsc } from "../../src/ordenadores/ordenador-nativo-asc";
import { Ordenador } from "../../src/ordenadores/ordenador";
import { OrdenadorValidador } from "../../src/ordenadores/validadores/ordenador-validador";

describe("OrdenadorNativoAsc Validador padrão", () => {
    let ordenadorNativoAsc:OrdenadorNativoAsc;
    
    const OrdenadorValidadorMock = jest.fn().mockImplementation(()=>{
        return {
            validar: jest.fn()
        }
    });

    let ordenadorValidadorMock:OrdenadorValidador;

    beforeEach(()=>{
        ordenadorValidadorMock = new OrdenadorValidadorMock();
        ordenadorNativoAsc = new OrdenadorNativoAsc(ordenadorValidadorMock);
    });

    it("OrdenadorNativoAsc deve herdar de Ordenador", async () => {  
        expect(ordenadorNativoAsc).toBeInstanceOf(Ordenador);
    });

    it("ordenar deve chamar a função validar do validador", async () => {  
        ordenadorNativoAsc.ordenar("papo reto")   
        expect(ordenadorValidadorMock.validar).toBeCalledTimes(1);
    });

    it("ordenar deve chamar a função validar do validador com o valor 'papo reto' ", async () => {  
        ordenadorNativoAsc.ordenar("papo reto")   
        expect(ordenadorValidadorMock.validar).toBeCalledWith('papo reto');
    });

    it(`ordenar deve retornar a palavra ordenada de forma ascendente'`, async () => {    
        expect(ordenadorNativoAsc.ordenar("palavra")).toBe("aaalprv");
    });

    it(`ordenar deve ordenar removendo os espaços`, async () => {  
        expect(ordenadorNativoAsc.ordenar("papo reto")).toBe('aeoopprt');
    });
    
});