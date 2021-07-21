import { TiposOrdenadores } from "../../constants/tipos-ordenadores";
import { TiposOrdenadoresValidadores } from "../../constants/tipos-ordenadores-validadores";
import { Ordenador } from "../ordenador";
import { OrdenadorNativoAscFactory } from "./ordenador-nativo-asc-factory";

export abstract class OrdenadorFactoryCreator{
    public static Ordenador(tipoOrdenador:TiposOrdenadores, tipoValidador:TiposOrdenadoresValidadores):Ordenador{
        switch(tipoOrdenador){
            case TiposOrdenadores.NATIVO_ASC:
                return new OrdenadorNativoAscFactory().create(tipoValidador);
            default:
                throw new TypeError("TiposOrdenadores não definido.")
        }
    }
}