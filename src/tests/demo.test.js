
describe('Pruebas en el archivo demo.test.js', ()=>{
    
    test('Debe de ser iguales los string ', () => {
        
        //1. inicialización
        const mensaje1 = 'hola mundo'
    
        //2. estímulo
        const mensaje2 = "hola mundo"
    
        //3. Observar el comportamiento
        expect(mensaje1).toBe(mensaje2)
    
      
    
    })

})

