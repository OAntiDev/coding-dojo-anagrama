import { OrdenadorValidador } from "./validadores/ordenador-validador";

export abstract class Ordenador {
    constructor(protected validador:OrdenadorValidador) {}

    public abstract ordenar(palavra:string):string;

}