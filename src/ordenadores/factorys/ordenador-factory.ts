import { TiposOrdenadoresValidadores } from "../../constants/tipos-ordenadores-validadores";
import { Ordenador } from "../ordenador";

export abstract class OrdenadorFactory{
    public abstract create(tipoValidador:TiposOrdenadoresValidadores):Ordenador;
}