import React, { Fragment } from 'react';
import HomePage from '../../containers/home/HomePage';
import Categories from '../../containers/categories/Categories';

const LandingPage = () => {
    return (
        <Fragment>
            <HomePage content={<Categories/>}/>
        </Fragment>
    )
}
export default LandingPage;
