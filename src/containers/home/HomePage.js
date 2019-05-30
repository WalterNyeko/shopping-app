import React, { Component, Fragment } from 'react';
import HomePageComponent from '../../components/home/HomePage';

class HomePage extends Component {

    render() {
        const { content } = this.props;
        return (
            <Fragment>
                <HomePageComponent content={content}/>
            </Fragment>
        )
    }
}
export default HomePage;
