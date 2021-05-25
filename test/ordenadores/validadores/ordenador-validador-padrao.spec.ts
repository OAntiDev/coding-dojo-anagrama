import { OrdenadorValidadorPadrao } from "../../../src/ordenadores/validadores/ordenador-validador-padrao";
import { Ordenador } from "../../../src/ordenadores/ordenador";
import { OrdenadorValidador } from "../../../src/ordenadores/validadores/ordenador-validador";

describe("OrdenadorValidadorPadrao", () => {
    let validadorPadrao:OrdenadorValidadorPadrao;
    beforeEach(()=>{
        validadorPadrao = new OrdenadorValidadorPadrao();
    });

    it("OrdenadorValidadorPadrao deve herdar de OrdenadorValidador", async () => {  
        expect(validadorPadrao).toBeInstanceOf(OrdenadorValidador);
    });

    it(`validar; para o parametro=null deve lançar 'O parametro não pode ser nulo e deve ter mais de um digito.'`, async () => {  
        let functionCreateWithError = ()=>{validadorPadrao.validar(null)};    
        expect(functionCreateWithError).toThrow('O parametro não pode ser nulo e deve ter mais de um digito.');
    });

    it(`validar; para o parametro='' deve lançar 'O parametro não pode ser nulo e deve ter mais de um digito.'`, async () => {  
        let functionCreateWithError = ()=>{validadorPadrao.validar("")};    
        expect(functionCreateWithError).toThrow('O parametro não pode ser nulo e deve ter mais de um digito.');
    });

    it(`validar; para o parametro='p' deve lançar 'O parametro não pode ser nulo e deve ter mais de um digito.'`, async () => {  
        let functionCreateWithError = ()=>{validadorPadrao.validar("p")};    
        expect(functionCreateWithError).toThrow('O parametro não pode ser nulo e deve ter mais de um digito.');
    });

    it("validar deve funcionar corretamente sem lançar erro nenhum", async () => {
        let functionNotError = ()=>{validadorPadrao.validar('carro')};    
        expect(functionNotError).not.toThrow();
    });
    
});