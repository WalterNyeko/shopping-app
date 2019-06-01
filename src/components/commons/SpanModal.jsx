import React, { Fragment } from 'react';
import { Modal} from 'antd';



const ReusableModal = (props) => {
    const { 
        spanText, 
        modalTitle, 
        modalContent, 
        modalWidth,
        handleOk, 
        handleCancel,
        showModal,
        visible,
        confirmLoading,
        className,
    } = props;
    return (
      <Fragment>
        <span onClick={showModal} className={className}>
            {spanText}
        </span>
        <Modal
            title={modalTitle}
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
            width={modalWidth}
            footer={null}
        >
            <p>{modalContent}</p>
        </Modal>
      </Fragment>
    );
}
export default ReusableModal;