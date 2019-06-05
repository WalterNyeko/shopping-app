import React, { Component, Fragment } from "react";
import SpanModalComponent from "../../components/commons/SpanModal";

export class SpanModal extends Component {
  state = {
    visible: false,
    confirmLoading: false
  };

  /**
   * triggers the modal to show up
   *
   * @returns {void}
   */
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  /**
   * ensures that a modal state, visible is set to false
   * this therefore allows modal to hide
   *
   * @returns {void}
   */
  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  /**
   * triggers the modal to hide
   * sets the state of the modal, visible to false
   *
   * @returns {void}
   */
  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    const {
      spanText,
      modalTitle,
      modalContent,
      modalWidth,
      className
    } = this.props;
    return (
      <Fragment>
        <SpanModalComponent
          visible={visible}
          confirmLoading={confirmLoading}
          spanText={spanText}
          modalTitle={modalTitle}
          modalContent={modalContent}
          modalWidth={modalWidth}
          showModal={this.showModal}
          handleCancel={this.handleCancel}
          handleOk={this.handleOk}
          className={className}
        />
      </Fragment>
    );
  }
}
