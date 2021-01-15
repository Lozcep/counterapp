import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Preubas en 05-funciones', () => {
    
    test('getUser debe de retornar un objeto ', () => {

        const userTest = {
              uid: 'ABC123',
             username: 'El_Papi1502'
        }

        const user =  getUser();
        console.log(user)

        expect( user ).toEqual( userTest)
        
    })

    test('getUsuarioActivo de retornar un objeto', () => {
        
    
    const name = "daniel"

    const userTest = {
        uid: 'ABC567',
        username: name
    }

    const user = getUsuarioActivo(name)

    expect( user ).toEqual( userTest )

    })
    
    

})