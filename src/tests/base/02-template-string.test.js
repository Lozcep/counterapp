import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', () => {

    test('Debe regresar Hola Fernando', () => {
        
        const nombre = 'Fernando';

        const saludo = getSaludo(nombre)

        expect( saludo ).toBe('Hola ' + nombre)

    })
    
    test('Debe regresar Hola Carlos', () => {
        
        const nombre = 'Carlos';

        const saludo = getSaludo()

        expect( saludo ).toBe('Hola ' + nombre)

    })


})