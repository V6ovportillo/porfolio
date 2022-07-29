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
})








/*
let wrapper;
beforeEach(()=>{
    wrapper = shallow(<Contact />);
})
describe('Contact', () => {
    it('must render contact page', () => {
        expect(wrapper.find("#contact").text()).toBeInTheDocument()
    })

    it('render form', () => {        
        expect(wrapper.find("#email").text()).toBeInTheDocument()
        expect(wrapper.find("#message").text()).toBeInTheDocument()
        expect(wrapper.find("#buttonSend").text()).toBeInTheDocument()
    })
})*/