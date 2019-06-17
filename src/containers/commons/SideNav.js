import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import SideNavComponent from "../../components/commons/SideNav";
import {
  getCategories,
  getDepartmentCategories
} from "../../store/actions/Categories";
import history from "../../helpers/history";

export class SideNav extends Component {
  state = {
    categories: [],
    categoriesForDepartment: []
  };
  componentWillMount = () => {
    if (this.props.departmentId) {
      const { getDepartmentCategories, departmentId } = this.props;
      getDepartmentCategories(departmentId);
    } else {
      const { getCategories } = this.props;
      getCategories();
    }
  };

  componentWillReceiveProps = nextProps => {
    if (
      this.props.departmentId !== nextProps.departmentId ||
      this.props.categoryId !== nextProps.categoryId
    ) {
      if (nextProps.departmentId) {
        const { getDepartmentCategories, departmentId } = nextProps;
        getDepartmentCategories(departmentId);
      } else {
        const { getCategories } = this.props;
        getCategories();
      }
    }
  };

  handleClickSideNav = id => {
    history.push(`/category/${id}`);
  };

  render() {
    let categoriesData;
    if (this.props.departmentId) {
      const {
        allCategories: { categoriesPerDepartment }
      } = this.props;
      categoriesData = categoriesPerDepartment;
    } else if (this.props.categoryId && !this.props.departmentId) {
      if (this.props.allCategories.categoriesPerDepartment.length) {
        const {
          allCategories: { categoriesPerDepartment }
        } = this.props;
        categoriesData = categoriesPerDepartment;
      } else {
        const {
          allCategories: {
            categories: { rows }
          }
        } = this.props;
        categoriesData = rows;
      }
    } else if (!this.props.departmentId && !this.props.categoryId) {
      const {
        allCategories: {
          categories: { rows }
        }
      } = this.props;
      categoriesData = rows;
    } else {
      const {
        allCategories: {
          categories: { rows }
        }
      } = this.props;
      categoriesData = rows;
    }

    const { content } = this.props;
    return (
      <Fragment>
        <SideNavComponent
          content={content}
          allCategories={categoriesData}
          handleClickSideNav={this.handleClickSideNav}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  allCategories: state.categories
});
export default connect(
  mapStateToProps,
  { getCategories, getDepartmentCategories }
)(SideNav);
