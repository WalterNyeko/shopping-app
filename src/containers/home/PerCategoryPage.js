import React, { Component, Fragment } from 'react';
import PerCategoryPage from '../../components/home/PerCategoryPage';

class LandingPage extends Component {
    render() {
        const { categoryId } = this.props.match.params;
        return (
            <Fragment>
                <PerCategoryPage categoryId={categoryId}/>
            </Fragment>
        )
    }
}
export default LandingPage;
