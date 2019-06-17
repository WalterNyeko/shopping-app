import React from 'react';
import { shallow } from 'enzyme';
import { AllProducts } from '../../../containers/products/AllProducts';

describe('AllProducts', () => {
    const props = {
        getProducts: jest.fn(),
        allProducts: {
            products: { count: 1, rows: []},
            productsAfterSearch: {
                count: 1, rows: []
            }
        }
    }
    const wrapper = shallow(<AllProducts {...props}/>);
    it('should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    })
})