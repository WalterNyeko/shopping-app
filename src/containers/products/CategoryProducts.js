import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ProductsComponent from '../../components/products/Products';
import { getProductsPerCategory } from '../../store/actions/Products';

export class CategoryProducts extends Component {

    componentWillMount = () => {
        const { getProductsPerCategory, categoryId } = this.props;
        const requestData = {
            page: 1,
            limit: 8,
            description_length: 100,
            categoryId
        }
        getProductsPerCategory(requestData);
    } 

    componentWillReceiveProps = (nextProps) => {
        if(nextProps.categoryId !== this.props.categoryId){
            const { getProductsPerCategory, categoryId } = nextProps;
            const requestData = {
                page: 1,
                limit: 8,
                description_length: 100,
                categoryId
            }
            getProductsPerCategory(requestData);
        }
 
    }
    
    render() {
        const { productsPerCategory } = this.props.allProducts;
        return (
            <Fragment>
                <ProductsComponent 
                    products={productsPerCategory}
                    categoryId={this.props.categoryId}/>
            </Fragment>
        )
    }
}
const mapStateToProps = (state) => ({
    allProducts: state.products
})
export default connect(mapStateToProps, { getProductsPerCategory })(CategoryProducts);