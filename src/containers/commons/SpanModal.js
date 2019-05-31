import React, { Component, Fragment } from 'react';
import SpanModalComponent from '../../components/commons/SpanModal';

export class SpanModal extends Component {
    state = {
        visible: false,
        confirmLoading: false,
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = () => {
        this.setState({
            visible: false,
        });
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    
    render() {
        const { 
            visible, 
            confirmLoading 
        } = this.state;
        const { 
            spanText,
            modalTitle,
            modalContent,
            modalWidth,
            className,
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
                    className={className} />
            </Fragment>
        )
    }
}