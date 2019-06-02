import React, { Component, Fragment } from 'react';
import EachProductComponent from '../../components/products/EachProduct';
import Pagination from "material-ui-flat-pagination";

class EachProduct extends Component {
    state = {
        visible: false,
        confirmLoading: false,
        offset: 0
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

    handleClick = (offset) => {
        this.setState({ offset });
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
                <div className="w-100 text-center mb-3">
                <div className="col-md-12 mx-auto">
                    <Pagination
                        limit={20}
                        offset={this.state.offset}
                        total={products && products.count? products.count: 1}
                        onClick={(e, offset) => this.handleClick(offset)}
                    />
                </div>
                </div>
                <div className="row">
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
                </div>
            </Fragment>
        )
    }
}
export default EachProduct;
