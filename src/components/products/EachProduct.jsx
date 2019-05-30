import React, { Fragment } from 'react';
import { truncateWords } from '../../helpers/index';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useStyles } from '../../styles/Products';
import Grid from '@material-ui/core/Grid';
import { Modal } from 'antd';


const EachProduct = ({ 
    products,
    modalTitle, 
    modalContent, 
    modalWidth,
    handleOk, 
    handleCancel,
    showModal,
    visible, 
    }) => {
    const classes = useStyles();

    return (
        <Fragment>
            {products && products.rows? products.rows.map(({product_id, name, description, price, discounted_price }) => (
              <Fragment>
              <Grid item key={product_id} xs={6} sm={3} md={3} onClick={showModal}>
                <Card className={classes.card}>
                    <Typography className={classes.heading} gutterBottom variant="h6" component="h2">
                      {name}
                    </Typography>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className={classes.cardContent}>
                    <div className="row">
                      <div className="col-md-6">
                        <Typography className="text-danger">
                          <strike>$ {price}</strike>
                        </Typography>
                      </div>
                      <div className="col-md-6">
                        <Typography className="btn btn-danger btn-sm" style={{float: 'right'}}>
                          $ {discounted_price}
                        </Typography>
                      </div>
                    </div>
                    <br/>
                    
                    <Typography>
                      {truncateWords(description, 20)}...
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              </Fragment>
            )): ('')}
            <Modal
                 title={modalTitle}
                 visible={visible}
                 onOk={handleOk}
                 onCancel={handleCancel}
                 width={modalWidth}
                 footer={null}
              >
                 <p>{modalContent}</p>
              </Modal>
        </Fragment>
    )
}
export default EachProduct;