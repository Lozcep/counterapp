import { getImagen } from "../../base-pruebas/11-async-await"


describe('Pruebas con asyn-await y Fetch', () => {
    
    test( 'debe retornar el url de la iamgen', async() => {

        const url = await getImagen()

        expect(url.includes('https://')).toBe(true)
        
    } )
})