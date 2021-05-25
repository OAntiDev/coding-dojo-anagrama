import { Anagrama } from "../src/anagramas/anagrama";
import { AnagramaValidadorCreator } from "../src/anagramas/validadores/anagrama-validador-creator";
import { TiposAnagramaValidadores } from "../src/constants/tipos-anagrama-validadores";
import { TiposOrdenadores } from "../src/constants/tipos-ordenadores";
import { TiposOrdenadoresValidadores } from "../src/constants/tipos-ordenadores-validadores";
import { OrdenadorFactoryCreator } from "../src/ordenadores/factorys/ordenador-factory-creator";


describe(`Anagrama E2E 
            Validador: padrão. 
            Ordenador: OrdenadorNativoAsc, Validador: Padrão.`, () => {
    let anagrama: Anagrama;

    beforeEach(() => {
        anagrama = new Anagrama(
            AnagramaValidadorCreator.create(TiposAnagramaValidadores.PADRAO),
            OrdenadorFactoryCreator.Ordenador(TiposOrdenadores.NATIVO_ASC, TiposOrdenadoresValidadores.PADRAO))
    });

    it(`Deve retornar true com Params = Palavra1='carro' Palavra2='acrro'`, async () => {
        expect(anagrama.validar('carro', 'acrro')).toBe(true);
    });

    it(`Deve retornar true com Params = Palavra1='aaaaaabbbbbbaaaaaacccccc' Palavra2='ccccccaaaaaabbbbbbaaaaaa'`, async () => {
        expect(anagrama.validar('aaaaaabbbbbbaaaaaacccccc', 'ccccccaaaaaabbbbbbaaaaaa')).toBe(true);
    });

    it(`Deve lançar erro: 'Parametro 2 inválido, pois está vazio ou nulo'
        Params = Palavra1='carro' Palavra2=null`, async () => {
        const funcValidar = () => { anagrama.validar('carro', null) }
        expect(funcValidar).toThrow('Parametro 2 inválido, pois está vazio ou nulo');
    });

    it(`Deve lançar erro: 'Parametro 1 inválido, pois está vazio ou nulo'
        Params = Palavra1='carro' Palavra2=null`, async () => {
        const funcValidar = () => { anagrama.validar(null, 'carro') }
        expect(funcValidar).toThrow('Parametro 1 inválido, pois está vazio ou nulo');
    });

});