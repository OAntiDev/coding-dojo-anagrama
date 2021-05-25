import { TiposAnagramaValidadores } from "../../constants/tipos-anagrama-validadores"
import { AnagramaValidadorPadrao } from "./anagrama-validador-padrao"

export abstract class AnagramaValidadorCreator{
    public static create(tipo:TiposAnagramaValidadores){
        switch(tipo){
            case TiposAnagramaValidadores.PADRAO:
                return new AnagramaValidadorPadrao()
            default:
                throw new TypeError("TiposAnagramaValidadores não definido.")
        }
    }
}