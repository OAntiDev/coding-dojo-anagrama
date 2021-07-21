import { TiposOrdenadoresValidadores } from "../../constants/tipos-ordenadores-validadores";
import { Ordenador } from "../ordenador";
import { OrdenadorNativoAsc } from "../ordenador-nativo-asc";
import { OrdenadorValidador } from "../validadores/ordenador-validador";
import { OrdenadorValidadorCreator } from "../validadores/ordenador-validador-creator";
import { OrdenadorFactory } from "./ordenador-factory";

export class OrdenadorNativoAscFactory extends OrdenadorFactory{
    public create(tipoValidador:TiposOrdenadoresValidadores){
        return new OrdenadorNativoAsc(OrdenadorValidadorCreator.create(tipoValidador));
    }
}