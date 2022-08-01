import React from 'react';
import Contact from '.'

import { shallow } from 'enzyme';

let wrapper;
beforeEach(()=>{
    wrapper = shallow(<Contact/>);
    console.log(wrapper.debug());
})

describe('Contact', ()=>{
    it('render title Contact', ()=> {
        expect(wrapper.find('h2').text()).toContain("Contact");
    })
    
    it('render form', () => {        
        
        expect(wrapper.find("#buttonSend").text()).toBe("Send")
        expect(wrapper.find("#email")).toHaveLength(1)
        expect(wrapper.find("#message")).toHaveLength(1)
    })
})








/*
let wrapper;
beforeEach(()=>{
    wrapper = shallow(<Contact />);
})
describe('Contact', () => {
    it('must render contact page', () => {
        expect(wrapper.find("#contact").text()).toBe()
    })

})*/