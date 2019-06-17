import React, { Component, Fragment } from 'react';
import PerCategoryPage from '../../components/home/PerCategoryPage';

class PerCategory extends Component {
    render() {
        const { categoryId } = this.props.match.params;
        return (
            <Fragment>
                <PerCategoryPage   
                    categoryId={categoryId}
                    dontRender/>
            </Fragment>
        )
    }
}
export default PerCategory;