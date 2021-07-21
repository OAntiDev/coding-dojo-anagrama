import { Ordenador } from "./ordenador";
import { OrdenadorValidador } from "./validadores/ordenador-validador";

export class OrdenadorNativoAsc extends Ordenador{
    
    constructor(validador:OrdenadorValidador) {
        super(validador);
    }

    public ordenar(palavra: string): string {
        this.validador.validar(palavra);
        return palavra.replace(/\s/g, "").split("").sort( (a, b) => a > b ? 1 : -1).join("");
    }

}