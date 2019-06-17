import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from '../../../containers/home/LandingPage';


describe('LandingPage', () => {
    const props = {
        allProducts: {
            products: {count: 11, rows: []}
        },
        getProductsAfterSearch: jest.fn(),
    }
    const wrapper = shallow(<LandingPage {...props}/>);
    it('should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call handleSearch when the function is called', () => {
        const spy = jest.spyOn(wrapper.instance(), "handleSearch");
        const event = {target: {name: '',value: ''}, preventDefault: jest.fn()}
        wrapper.instance().handleSearch(event);
        expect(spy).toHaveBeenCalled();
    });

    it('should render well when there is no products', () => {
        wrapper.setProps({allProducts: {}});
        expect(wrapper).toMatchSnapshot();
    });

    it("should update the state with the new value whenever input changes on search field", () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleInputChange');
        const event = { target: { name: 'query', value: 'Italia'}}
        wrapper.instance().handleInputChange(event);
        expect(spy).toHaveBeenCalled();
        expect(wrapper.instance().state.query).toEqual("Italia");
      });
})