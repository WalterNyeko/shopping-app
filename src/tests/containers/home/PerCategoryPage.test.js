import { shallow } from 'enzyme';
import React from 'react';
import PerCategory from '../../../containers/home/PerCategoryPage';
import PerCategoryComponent from '../../../components/home/PerCategoryPage';
import HomePage from '../../../containers/home/HomePage';

describe('PerCategory Page', () => {
    const props = {
        match: {
            params: {
                categoryId: 1
            }
        },
        allDepartments: {
            departments: []
        }
    }
 
    const wrapper = shallow(
        <PerCategory {...props}/>);
    const componentWrapper = shallow(
        <PerCategoryComponent {...props}/>);
    it('should render without crashing', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render component appropriately', () => {
        expect(componentWrapper.find(HomePage)).toHaveLength(1);
    });
})