import React from 'react';
import { screen, render } from '@testing-library/react'
import PortfolioList from '.'

describe('Portfolio List', () => {
    const selected = 1;
    const setSelected = jest.fn()
    const item = {
        "id": 1,
        "title": "Prueba" 
    }
    render(<PortfolioList item={item} selected={selected} setSelected={setSelected} />);
    

    it('must display a item', () => {
        expect(screen.getByText("Prueba"));
    })
});