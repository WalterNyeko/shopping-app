import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ProductsComponent from '../../components/products/Products';
import { getProductsPerCategory } from '../../store/actions/Products';

class CategoryProducts extends Component {

    componentWillMount = () => {
        const { getProductsPerCategory, categoryId } = this.props;
        getProductsPerCategory(categoryId);
    } 

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.categoryId !== this.props.categoryId){
            const { getProductsPerCategory, categoryId } = nextProps;
            getProductsPerCategory(categoryId);
        }
 
    }
    
    render() {
        const { productsPerCategory } = this.props.allProducts;
        return (
            <Fragment>
                <ProductsComponent 
                    products={productsPerCategory}/>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    allProducts: state.products
})
export default connect(mapStateToProps, { getProductsPerCategory })(CategoryProducts);