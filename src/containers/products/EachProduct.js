import React, { Component, Fragment } from 'react';
import EachProductComponent from '../../components/products/EachProduct';

class EachProduct extends Component {
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
        console.log('ticked')
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    }
    render() {
        const {
            products,
            modalTitle, 
            modalContent, 
            modalWidth,
        } = this.props;
        return (
            <Fragment>
                <EachProductComponent
                    products={products}
                    modalTitle={modalTitle} 
                    modalContent={modalContent} 
                    modalWidth={modalWidth}
                    handleOk={this.handleOk}
                    handleCancel={this.handleCancel}
                    showModal={this.showModal}
                    visible={this.state.visible}
                />
            </Fragment>
        )
    }
}
export default EachProduct;
