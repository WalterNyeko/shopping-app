import React from 'react';
import { shallow, mount  } from 'enzyme';
import Home from '../../../containers/home/Home';

describe('Home', () => {
    const wrapper = shallow(<Home/>);
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})