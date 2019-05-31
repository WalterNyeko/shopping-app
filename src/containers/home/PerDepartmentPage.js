import React, { Component, Fragment } from 'react';
import PerDepartmentPage from '../../components/home/PerDepartmentPage';

class ProductsPerDepartment extends Component {
    render() {
        const { departmentId } = this.props.match.params;
        return (
            <Fragment>
                <PerDepartmentPage departmentId={departmentId}/>
            </Fragment>
        )
    }
}
export default ProductsPerDepartment;