import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";

const OrderPage = ({ cartItems, totalAmount, handleClick, handlePayment }) => {
  return (
    <Fragment>
      <section className="container content">
        <div className="row mt-5 mb-5">
          <div className="col-md-2 col-sm-12">
            <button className="btn btn-danger btn-block" onClick={handleClick}>
              EMPTY CART
            </button>
          </div>
          <div className="col-md-8 col-sm-12 text-center">
            <h4 className="text-danger pt-3">
              <strong>Total: $ {totalAmount ? totalAmount : "0.0"}</strong>
            </h4>
          </div>
          <div className="col-md-2 col-sm-12">
            {totalAmount > 0 ? (
              <StripeCheckout
                token={handlePayment}
                stripeKey="pk_test_a7BkMHivjiRVLnCVyXh3SkzO00UdQn0SYm"
                amount={totalAmount * 100} // cents
                email="nyekowalter69@gmail.com"
                label="PLACE ORDER"
                billingAddress
                shippingAddress
              />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th />
                <th>Name</th>
                <th>Attribute</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {cartItems &&
                cartItems.length &&
                cartItems.map(
                  ({
                    item_id,
                    name,
                    price,
                    subtotal,
                    attributes,
                    quantity
                  }) => (
                    <tr key={item_id}>
                      <td>
                        <p className="remove-order">
                          <i className="fas fa-times text-danger" /> Remove
                        </p>
                      </td>
                      <td>{name}</td>
                      <td>{attributes}</td>
                      <td>{price}</td>
                      <td>
                        <button className="btn btn-danger btn-sm btn-group">
                          -
                        </button>
                        <button className="btn btn-sm btn-group">
                          {quantity}
                        </button>
                        <button className="btn btn-danger btn-sm btn-group">
                          +
                        </button>
                      </td>
                      <td>${subtotal}</td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
};
export default OrderPage;
