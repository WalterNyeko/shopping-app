import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const OrderPage = ({
  cartItems,
  totalAmount,
  handleClick,
  handleClickRemoveItem,
  handleClickIncreaseItemQuantity,
  handleClickDecreaseItemQuantity
}) => {
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
            {cartItems.length ? (
              <NavLink to="/orders" className="btn btn-danger">
                PLACE ORDER
              </NavLink>
            ) : (
              <NavLink to="/orders" className="btn btn-danger">
                MY ORDERS
              </NavLink>
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
              {cartItems.length
                ? cartItems.map(
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
                          <span
                            className="remove-order"
                            onClick={() => handleClickRemoveItem(item_id)}
                          >
                            <i className="fas fa-times text-danger" /> Remove
                          </span>
                        </td>
                        <td>{name}</td>
                        <td>{attributes}</td>
                        <td>{price}</td>
                        <td>
                          <button
                            className="btn btn-danger btn-sm btn-group"
                            onClick={() =>
                              handleClickDecreaseItemQuantity(item_id)
                            }
                          >
                            -
                          </button>
                          <button className="btn btn-sm btn-group">
                            {quantity}
                          </button>
                          <button
                            className="btn btn-danger btn-sm btn-group"
                            onClick={() =>
                              handleClickIncreaseItemQuantity(item_id)
                            }
                          >
                            +
                          </button>
                        </td>
                        <td>${subtotal}</td>
                      </tr>
                    )
                  )
                : ""}
            </tbody>
          </table>
        </div>
      </section>
    </Fragment>
  );
};
export default OrderPage;
