import React, { Fragment } from 'react';
import HomePage from '../../containers/home/HomePage';
import AllProducts from '../../containers/products/AllProducts';

const LandingPage = () => {
    return (
        <Fragment>
            <HomePage content={<AllProducts/>}/>
        </Fragment>
    )
}
export default LandingPage;
