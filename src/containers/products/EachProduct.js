import React, { Component, Fragment } from "react";
import EachProductComponent from "../../components/products/EachProduct";
import Pagination from "material-ui-flat-pagination";

class EachProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  render() {
    const { products } = this.props;
    return (
      <Fragment>
        <div className="w-100 text-center mb-3">
          <div className="col-md-12 mx-auto">
            <Pagination
              limit={20}
              offset={this.state.offset}
              total={products && products.count ? products.count : 1}
              onClick={(e, offset) => this.handleClick(offset)}
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
export default EachProduct;
