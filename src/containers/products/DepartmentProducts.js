import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ProductsComponent from '../../components/products/Products';
import { getProductsPerDepartment } from '../../store/actions/Products';

class Products extends Component {

    componentWillMount = () => {
        const { getProductsPerDepartment, departmentId } = this.props;
        getProductsPerDepartment(departmentId);
    } 

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.departmentId !== this.props.departmentId){
            const { getProductsPerDepartment, departmentId } = nextProps;
            getProductsPerDepartment(departmentId);
        }
 
    }
    
    render() {
        const { productsPerDepartment } = this.props.allProducts;
        return (
            <Fragment>
                <ProductsComponent 
                    products={productsPerDepartment}/>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    allProducts: state.products
})
export default connect(mapStateToProps, { getProductsPerDepartment })(Products);
