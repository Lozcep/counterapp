import  React  from "react";
import '@testing-library/jest-dom'
import  PrimeraApp  from "../PrimeraApp";
import { shallow } from "enzyme";

describe('Pruebas en <PrimeraApp />' , () => {
    
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola soy Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />)

        expect(wrapper).toMatchSnapshot()
    })

    test('Debe mostrar el subtitulo por props', () => {
        
        const saludo = 'Hola soy Goku'
        const subtitulo = 'Soy un subtitulo'
        const wrapper = shallow(
        <PrimeraApp 
            saludo={saludo}
            subtitulo={subtitulo} />)

        const textoParrafo = wrapper.find('p').text()

        expect(textoParrafo).toBe(subtitulo)



    })
    
    
})