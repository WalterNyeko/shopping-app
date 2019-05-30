import React, { Component, Fragment } from 'react';
import SideNavComponent from '../../components/commons/SideNav';

class SideNav extends Component {
    render() {
        const { content } = this.props;
        return (
            <Fragment>
                <SideNavComponent content={content}/>
            </Fragment>
        )
    }
}
export default SideNav;
