import React from "react"
import '@testing-library/jest-dom'
import  CounterApp from "../CounterApp";
import { shallow } from "enzyme";

describe('Pruebas en CounterApp', () => {

    let wrapper = shallow(<CounterApp />)

    beforeEach( () => {
        wrapper = shallow(<CounterApp />)
    }  )

    test('Debe mostrar <CounterApp> correctamente', () => {
        
        expect(wrapper).toMatchSnapshot()

    })

    test('Debe de mostrar el valor por defecto de 100', () => {

        const wrapper = shallow(
        <CounterApp 
            value={100}
         />)

        const valorRenderizado = wrapper.find('h2').text().trim()

        expect(valorRenderizado).toBe('100')

    })

    test('debe de incrementar con el boton +1', () => { 
        
        wrapper.find('button').at(0).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        
        expect(counterText).toBe('11')

        
        

    })
    
    test('debe decrementar con el boton -1', () => { 
        
        wrapper.find('button').at(2).simulate('click')
        const counterText = wrapper.find('h2').text().trim()
        
        expect(counterText).toBe('9')
 

    }) 

    test('debe reiniciar con el boton reset', () => { 
        
        const wrapper = shallow(
            <CounterApp 
                value={100}
             />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')

        const counterText = wrapper.find('h2').text().trim()
        console.log(counterText)
        expect(counterText).toBe('100')
 

    })    
    
    
})