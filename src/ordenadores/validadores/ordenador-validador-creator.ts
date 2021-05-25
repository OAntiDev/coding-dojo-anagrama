import { TiposOrdenadoresValidadores } from "../../constants/tipos-ordenadores-validadores";
import { OrdenadorValidadorPadrao } from "./ordenador-validador-padrao";

export abstract class OrdenadorValidadorCreator{
    public static create(tipo:TiposOrdenadoresValidadores){
        switch(tipo){
            case TiposOrdenadoresValidadores.PADRAO:
                return new OrdenadorValidadorPadrao()
            default:
                throw new TypeError("TiposOrdenadoresValidadores não definido.")
        }
    }
}