import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import HomePageComponent from "../../components/home/HomePage";
import { getDepartments } from "../../store/actions/Departments";

class HomePage extends Component {
  componentWillMount = () => {
    const { getDepartments } = this.props;
    getDepartments();
  };

  render() {
    const {
      departmentId,
      allDepartments: { departments },
      handleSearch,
      handleInputChange,
      dontRender,
      content,
      categoryId,
      showSearchField
    } = this.props;
    return (
      <Fragment>
        <HomePageComponent
          content={content}
          dontRender={dontRender}
          categoryId={categoryId}
          departmentId={departmentId}
          departments={departments}
          handleSearch={handleSearch}
          handleInputChange={handleInputChange}
          showSearchField={showSearchField}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  allDepartments: state.departments
});
export default connect(
  mapStateToProps,
  { getDepartments }
)(HomePage);
