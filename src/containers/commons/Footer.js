import React, { Component, Fragment } from "react";
import FooterPage from "../../components/commons/Footer";

class Footer extends Component {
  render() {
    const { departments } = this.props;
    return (
      <Fragment>
        <FooterPage departments={departments} />
      </Fragment>
    );
  }
}
export default Footer;
