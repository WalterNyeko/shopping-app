import React, { Component, Fragment } from "react";
import PerDepartmentPage from "../../components/home/PerDepartmentPage";
import { getProductsAfterSearch } from "../../store/actions/Products";
import { connect } from "react-redux";

class ProductsPerDepartment extends Component {
  state = {
    query: ""
  };
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
    const { departmentId } = this.props.match.params;
    return (
      <Fragment>
        <PerDepartmentPage
          departmentId={departmentId}
          handleSearch={this.handleSearch}
          handleInputChange={this.handleInputChange}
          afterSearch={this.state.query}
        />
      </Fragment>
    );
  }
}
export default connect(
  null,
  { getProductsAfterSearch }
)(ProductsPerDepartment);
