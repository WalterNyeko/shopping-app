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
      content,
      departmentId,
      allDepartments: { departments }
    } = this.props;
    return (
      <Fragment>
        <HomePageComponent
          content={content}
          departmentId={departmentId}
          departments={departments}
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
