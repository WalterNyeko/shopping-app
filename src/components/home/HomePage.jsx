import React, { Fragment } from 'react';
import UpperNav from '../../containers/commons/UpperNav';
import SideNav from '../../containers/commons/SideNav';

const HomePage = (props) => {
    const { content } = props;
    return (
        <Fragment>
            <UpperNav/>
            <SideNav content={content}/>
        </Fragment>
    )
}
export default HomePage;