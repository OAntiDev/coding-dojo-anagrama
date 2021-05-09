export class Anagrama{
    

    static validarSeEhAnagrama(palavra1: string, palavra2: string): Boolean{
        if (palavra2.split("").reverse().join("") === palavra1)
            return true;
    };

}