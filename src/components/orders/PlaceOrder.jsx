import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { FETCH_CART_ITEMS } from "../../store/types";

const PlaceOrder = ({
  state,
  shippingRegions,
  handleInputChange,
  handlePlaceOrder,
  myOrders,
  handleFetchOrderById,
  orderOfParticularId,
  orderDetails,
  formatDate,
  handlePayment,
  email,
  cartItems
}) => {
  return (
    <section className="container content mb-5">
      <div className="row">
        <div className="col-md-6">
          {cartItems.length ? (
            <div className="card">
              <div className="card-header">Place Order</div>
              <div className="card-body">
                <form>
                  <div className="form-group row">
                    <label
                      for="shipping-address"
                      className="col-md-4 text-right"
                    >
                      Ship To:
                    </label>
                    <select
                      className="form-control col-md-7"
                      onChange={handleInputChange}
                      name="shipping_id"
                    >
                      {shippingRegions &&
                        shippingRegions.length &&
                        shippingRegions.map(
                          ({ index, shipping_region_id, shipping_region }) => (
                            <option value={shipping_region_id} key={index}>
                              {shipping_region}
                            </option>
                          )
                        )}
                    </select>
                    {state.errors.shipping_id && (
                      <span className="text-danger">
                        {state.errors.shipping_id}
                      </span>
                    )}
                  </div>

                  <div className="form-group row">
                    <label for="tax" className="col-md-4 text-right">
                      Tax Type:
                    </label>
                    <label for="tax" className="col-md-7 text-right">
                      {state.tax_type}
                    </label>
                  </div>
                  <div className="form-group row">
                    <label for="tax_type" className="col-md-4 text-right">
                      Tax Percentage:
                    </label>
                    <label for="tax_type" className="col-md-7 text-right">
                      {state.tax_percentage}
                    </label>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-4" />
                    <div className="col-md-7 p-0">
                      <button
                        type="submit"
                        className="btn btn-danger btn-block"
                        onClick={handlePlaceOrder}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className={`order-table ${cartItems.length ? "mt-5" : ""}`}>
            <div className="card">
              <div className="card-header">My Orders</div>
              <div className="card-body">
                <table className="table table-striped table-hover table-sm">
                  <thead>
                    <tr>
                      <th>Ordered By</th>
                      <th>Shipped On</th>
                      <th>Status</th>
                      <th>Ordered On</th>
                      <th>Total Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {myOrders &&
                      myOrders.length &&
                      myOrders.map(
                        ({
                          name,
                          order_id,
                          shipped_on,
                          status,
                          total_amount,
                          created_on
                        }) => (
                          <tr
                            onClick={() => handleFetchOrderById(order_id)}
                            key={order_id}
                          >
                            <td>{name}</td>
                            <td>{shipped_on ? shipped_on : "Not shipped"}</td>
                            <td>{status === 0 ? "Not paid" : "Paid"}</td>
                            <td>{formatDate(created_on)}</td>
                            <td>{`$ ${total_amount}`}</td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 mx-auto">
          <div className="card">
            <div className="card-header">Order Summary</div>
            <div className="card-body">
              <table className="table table-striped table-hover table-sm">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Attributes</th>
                    <th>Quantity</th>
                    <th>Unit Cost</th>
                    <th>SubTotal</th>
                  </tr>
                </thead>
                <tbody>
                  {orderOfParticularId &&
                    orderOfParticularId.length &&
                    orderOfParticularId.map(
                      ({
                        product_name,
                        attributes,
                        quantity,
                        unit_cost,
                        subtotal
                      }) => (
                        <tr>
                          <td>{product_name}</td>
                          <td>{attributes}</td>
                          <td>{quantity}</td>
                          <td>{`$ ${unit_cost}`}</td>
                          <td>{`$ ${subtotal}`}</td>
                        </tr>
                      )
                    )}
                </tbody>
              </table>

              <form>
                <div className="form-group">
                  <hr className="m-0" />
                  <div className="order-total pt-2">
                    <h5>
                      Order Total Cost{" "}
                      <span className="float-right">{`$ ${
                        orderDetails.total_amount
                          ? orderDetails.total_amount
                          : "0"
                      }`}</span>
                    </h5>
                  </div>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <StripeCheckout
                token={handlePayment}
                stripeKey="pk_test_a7BkMHivjiRVLnCVyXh3SkzO00UdQn0SYm"
                amount={orderDetails.total_amount * 100} // cents
                label="PAY NOW"
                billingAddress
                shippingAddress
                email={email}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
