import React, { Component, Fragment } from "react";
import EachProductComponent from "../../components/products/EachProduct";
import Pagination from "material-ui-flat-pagination";
import { connect } from "react-redux";
import {
  getProducts,
  getProductsPerDepartment,
  getProductsPerCategory,
  getProductsAfterSearch
} from "../../store/actions/Products";

export class EachProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      offset: 0,
      limit: 8
    };
  }

  handleClick = offset => {
    const { limit } = this.state;
    const currentPage = offset / limit + 1;
    this.setState({ offset });
    const { getProducts } = this.props;
    const requestData = {
      page: currentPage,
      limit,
      description_length: 100
    };
    getProducts(requestData);
    if (this.props.departmentId) {
      const { departmentId, getProductsPerDepartment } = this.props;
      const requestDataDepartment = {
        page: currentPage,
        limit,
        description_length: 100,
        departmentId
      };
      getProductsPerDepartment(requestDataDepartment);
    }

    if (this.props.categoryId) {
      const { categoryId, getProductsPerCategory } = this.props;
      const requestDataCategory = {
        page: currentPage,
        limit,
        description_length: 100,
        categoryId
      };
      getProductsPerCategory(requestDataCategory);
    }

    if (this.props.afterSearch) {
      const { afterSearch, getProductsAfterSearch } = this.props;
      const requestDataSearch = {
        page: currentPage,
        limit,
        description_length: 100,
        query_string: afterSearch
      };
      getProductsAfterSearch(requestDataSearch);
    }
  };

  render() {
    const { products } = this.props;
    return (
      <Fragment>
        <div className="w-100 text-center mb-3">
          <div className="col-md-12 mx-auto">
            <Pagination
              limit={this.state.limit}
              offset={this.state.offset}
              total={products && products.count ? products.count : 1}
              onClick={(event, offset) => this.handleClick(offset)}
            />
          </div>
        </div>
        <div className="row">
          <EachProductComponent products={products} />
        </div>
      </Fragment>
    );
  }
}
export default connect(
  null,
  {
    getProducts,
    getProductsPerDepartment,
    getProductsPerCategory,
    getProductsAfterSearch
  }
)(EachProduct);
