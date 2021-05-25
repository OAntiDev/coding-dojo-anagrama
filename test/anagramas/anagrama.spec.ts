import { Ordenador } from "src/ordenadores/ordenador";
import { Anagrama } from "../../src/anagramas/anagrama";
import { AnagramaValidador } from "../../src/anagramas/validadores/anagrama-validador";

describe("Anagrama", () => {
    let anagrama:Anagrama;
    let anagramaValidadorMock:AnagramaValidador;
    let ordenadorMock:Ordenador;
    
    const AnagramaValidadorMock = jest.fn().mockImplementation(()=>{
        return {
            validar: jest.fn()
        }
    });

    beforeEach(()=>{
        anagramaValidadorMock = new AnagramaValidadorMock();       
    });

    it(`validar deve chamar o Ordenador.ordenar 2 vezes`, async () => {  
        const OrdenadorMock = jest.fn().mockImplementation(()=>{
            return {
                ordenar: jest.fn()
            }
        });
        ordenadorMock = new OrdenadorMock();
        anagrama = new Anagrama(anagramaValidadorMock, ordenadorMock);
        anagrama.validar("carro", "orrac")
        expect(ordenadorMock.ordenar).toBeCalledTimes(2);
    });

    it(`validar deve chamar o Ordenador.ordenar passar os parametros "carro" e "orrac"`, async () => {  
        const OrdenadorMock = jest.fn().mockImplementation(()=>{
            return {
                ordenar: jest.fn()
            }
        });
        ordenadorMock = new OrdenadorMock();
        anagrama = new Anagrama(anagramaValidadorMock, ordenadorMock);
        anagrama.validar("carro", "orrac")
        expect(ordenadorMock.ordenar).toBeCalledWith("carro");
        expect(ordenadorMock.ordenar).toBeCalledWith("orrac");
    });

    it(`validar deve retornar true com os params "carro" e "orrac"`, async () => {  
        const OrdenadorMock = jest.fn().mockImplementation(()=>{
            return {
                ordenar: (palavra)=>{return "acrro"}
            }
        });
        ordenadorMock = new OrdenadorMock();
        anagrama = new Anagrama(anagramaValidadorMock, ordenadorMock);
        anagrama.validar("carro", "orrac")
        expect(anagrama.validar("carro", "orrac")).toBe(true);
    });


    it(`validar deve retornar false com os params "carro" e "xrrac"`, async () => {  
        let inc = 0;
        const OrdenadorMock = jest.fn().mockImplementation(()=>{
            return {
                ordenar: (palavra)=> {                    
                    let list = ["carro", "xrrac"]
                    let retorno = list[inc]
                    inc ++;
                    return retorno;
                }
            }
        });
        ordenadorMock = new OrdenadorMock();
        anagrama = new Anagrama(anagramaValidadorMock, ordenadorMock);
        expect(anagrama.validar("carro", "xrrac")).toBe(false);
    });
    
});