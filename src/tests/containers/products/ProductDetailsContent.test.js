import React from 'react';
import { shallow } from 'enzyme';
import { ProductDetailsContent } from '../../../containers/products/ProductDetailsContent';
import ProductDetailsContentComponent from '../../../components/products/ProductDetailsContent';

describe('ProductDetailsContent', () => {
    const props = {
        getProductAttributes: jest.fn(),
        addToShoppingCart: jest.fn(),
        leaveReview: jest.fn(),
        product: {
            product_id: 1
        },
        theAttributes: {
            attributes: [{attribute_name: 'Color'}, {attribute_name: 'Size'}]
        },
        leaveReview: jest.fn(),
        addToShoppingCart: jest.fn()
    }

    const nextProps = {
        getProductAttributes: jest.fn(),
        addToShoppingCart: jest.fn(),
        leaveReview: jest.fn(),
        product: {
            product_id: 1
        },
        theAttributes: {
            attributes: [
                {attribute_name: 'Color'}, 
                {attribute_name: 'Size'},
                {attribute_name: 'Color'}, 
                {attribute_name: 'Size'}]
        }
    }

    const componentProps = {
        product: { thumbnail: 'altar-piece.gif', discounted_price: 1000}, onStarClick: jest.fn(), rating: 3, productReviews: [{}], sizeOpen: false,
        colorOpen: true, handleChange: jest.fn(), handleSubmit: jest.fn(), handleCloseColor: jest.fn(),
        handleOpenColor: jest.fn(), handleCloseSize: jest.fn(), handleOpenSize: jest.fn(),
        color: 'Blue', size: 'XXL', colorsData: [
            {attribute_value_id: 1, attribute_value: 'Test'},
            {attribute_value_id: 2, attribute_value: 'Test 1'}], 
        sizesData: [
            {attribute_value_id: 1, attribute_value: 'Test'},
            {attribute_value_id: 2, attribute_value: 'Test 1'}], 
        handleAddReviews: jest.fn(), review: '', errors: {}
    }
    const wrapper = shallow(<ProductDetailsContent {...props}/>);
    const componentWrapper = shallow(<ProductDetailsContentComponent {...componentProps}/>);
    it('should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should change state value of openSize to false when handleCloseSize is callled', () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleCloseSize');
        wrapper.instance().handleCloseSize();
        expect(spy).toHaveBeenCalled();
        expect(wrapper.instance().state.openSize).toEqual(false);
    });

    it('should change state value of openSize to true when handleOpenSize is callled', () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleOpenSize');
        wrapper.instance().handleOpenSize();
        expect(spy).toHaveBeenCalled();
        expect(wrapper.instance().state.openSize).toEqual(true);
    });

    it('should change state value of openColor to false when handleCloseColor is callled', () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleCloseColor');
        wrapper.instance().handleCloseColor();
        wrapper.instance().componentWillReceiveProps(nextProps);
        expect(spy).toHaveBeenCalled();
        expect(wrapper.instance().state.openColor).toEqual(false);
    });

    it('should change state value of openColor to true when handleOpenColor is callled', () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleOpenColor');
        wrapper.instance().handleOpenColor();
        expect(spy).toHaveBeenCalled();
        expect(wrapper.instance().state.openColor).toEqual(true);
    });

    it('should change state value of rating when changeRating() is callled', () => {
        const spy = jest.spyOn(wrapper.instance(), 'changeRating');
        wrapper.instance().changeRating(5, 'test');
        expect(spy).toHaveBeenCalled();
        expect(wrapper.instance().state.rating).toEqual(5);
    });

    it('should call handleAddReviews() when the function is callled', () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleAddReviews');
        wrapper.instance().handleAddReviews();
        expect(spy).toHaveBeenCalled();
    });

    it('should call inputErrors() when handleSubmit() is callled without size and color', () => {
        const spy = jest.spyOn(wrapper.instance(), 'inputErrors');
        wrapper.instance().handleSubmit();
        expect(spy).toHaveBeenCalled();
    });

    it('should call inputErrors handleSubmit() when handleSubmit() is callled without size', () => {
        const spy = jest.spyOn(wrapper.instance(), 'inputErrors');
        wrapper.setState({size: "", color: "Black"});
        wrapper.instance().handleSubmit();
        expect(spy).toHaveBeenCalled();
    });

    it('should not call inputErrors for the third time when handleSubmit() is callled with size and color', () => {
        const spy = jest.spyOn(wrapper.instance(), 'inputErrors');
        wrapper.setState({size: "XXL", color: "Blue"});
        wrapper.instance().handleSubmit();
        expect(spy).toHaveBeenCalledTimes(2);
    });

    it('should change the state values when onChange handler is triggered', () => {
        const spy = jest.spyOn(wrapper.instance(), 'handleChange');
        const event = {target: { name: 'color', value: 'Blue'}, preventDefault: jest.fn()}
        wrapper.instance().handleChange(event);
        expect(spy).toHaveBeenCalled();
        expect(wrapper.instance().state.color).toEqual("Blue");
    });
})