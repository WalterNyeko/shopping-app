import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import LandingPageComponent from "../../components/home/LandingPage";
import { getProductsAfterSearch } from "../../store/actions/Products";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSearch = event => {
    event.preventDefault();
    const { getProductsAfterSearch } = this.props;
    const data = {
      query_string: this.state.query,
      page: 1,
      limit: 8,
      description_length: 100
    };
    getProductsAfterSearch(data);
  };

  render() {
    let theRows;
    if (this.props.allProducts.products) {
      const { rows } = this.props.allProducts.products;
      theRows = rows;
    } else {
      theRows = { count: 0, rows: [] };
    }
    return (
      <Fragment>
        <LandingPageComponent
          handleSearch={this.handleSearch}
          handleInputChange={this.handleInputChange}
          products={theRows}
          afterSearch={this.state.query}
          showSearchField
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  allProducts: state.products
});
export default connect(
  mapStateToProps,
  { getProductsAfterSearch }
)(LandingPage);
