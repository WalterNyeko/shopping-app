import React, { Component, Fragment } from 'react';
import HomePageComponent from '../../components/home/HomePage';

class HomePage extends Component {

    render() {
        const { content, departmentId } = this.props;
        return (
            <Fragment>
                <HomePageComponent 
                    content={content}
                    departmentId={departmentId}/>
            </Fragment>
        )
    }
}
export default HomePage;
