import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutUs from '..';

afterEach(cleanup);

describe('AboutUs component', () => {
    //renders AboutUs test
    //First Test
        it('renders', () => {
            render(<AboutUs />);
        });
    //Second Test
        it('matches snapshot DOM node structure', () => {
            //render AboutUs
            const {asFragment} = render(<AboutUs />);
            expect(asFragment()).toMatchSnapshot();
        })
})