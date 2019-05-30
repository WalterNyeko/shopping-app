import React, { Component, Fragment } from 'react';
import UpperNavComponent from '../../components/commons/UpperNav';

class UpperNav extends Component {
    state = {
        isLoggedIn: false,
    }
    render() {
        const { isLoggedIn } = this.state;
        return (
            <Fragment>
                <UpperNavComponent isLoggedIn={isLoggedIn}/>
            </Fragment>
        )
    }
}
export default UpperNav;
