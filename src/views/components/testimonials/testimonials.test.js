import React from 'react';
import {screen, render} from '@testing-library/react'
import Testimonial from '.' 

describe('Testimonials', () => {
    it('must display a title: testimonial',()=>{
        render(<Testimonial/>);
        expect(screen.queryByText(/Testimonials/i)).toBeInTheDocument();
    })
    it('must display a testimonial at least',()=>{
        render(<Testimonial/>);
        expect(screen.queryByText(/Testimonials/i)).toBeInTheDocument();
    })
})

