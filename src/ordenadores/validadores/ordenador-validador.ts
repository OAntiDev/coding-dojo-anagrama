import { TiposOrdenadoresValidadores } from "../../constants/tipos-ordenadores-validadores";
import { OrdenadorValidadorPadrao } from "./ordenador-validador-padrao";

export abstract class OrdenadorValidador{
    public abstract validar(palavra);
}