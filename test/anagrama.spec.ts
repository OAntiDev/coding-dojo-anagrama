import {Anagrama}  from "../src/anagrama"

describe("Anagrama", () => {
    
    it("validarSeEhAnagrama deve retornar true com amor e roma", async () => {  
        expect(Anagrama.validarSeEhAnagrama("amor", "roma")).toBe(true);
    });

});