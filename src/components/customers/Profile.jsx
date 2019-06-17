import React from "react";

export const Profile = ({
  theCustomer,
  handleInputChange,
  state,
  hanleEditCreditCard,
  hanleEditAddress,
  hanleEditProfile,
  shippingRegions,
  currentRegion
}) => {
  const {
    name,
    email,
    address_1,
    address_2,
    city,
    region,
    postal_code,
    country,
    shipping_region_id,
    credit_card,
    day_phone,
    eve_phone,
    mob_phone
  } = theCustomer.customerDetails;

  return (
    <section className="container content mb-5">
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <div className="user-image text-center mb-4">
                <i className="fa fa-user-circle fa-8x" />
              </div>
              <div className="profile">
                <ul className="list-group">
                  <li className="list-group-item no-line">
                    <strong>Full Name:</strong>
                    <span className="float-right">{name ? name : ""}</span>
                  </li>
                  <li className="list-group-item no-line">
                    <strong>Email:</strong>
                    <span className="float-right">{email ? email : ""}</span>
                  </li>
                  <li className="list-group-item no-line">
                    <strong>Day Phone:</strong>
                    <span className="float-right">
                      {day_phone ? day_phone : ""}
                    </span>
                  </li>
                  <li className="list-group-item no-line">
                    <strong>Evening Phone:</strong>
                    <span className="float-right">
                      {eve_phone ? eve_phone : ""}
                    </span>
                  </li>
                  <li className="list-group-item no-line">
                    <strong>Mobile Phone:</strong>
                    <span className="float-right">
                      {mob_phone ? mob_phone : ""}
                    </span>
                  </li>
                  <li className="list-group-item no-line">
                    <p>
                      <a
                        className="btn btn-danger btn-sm"
                        data-toggle="collapse"
                        href="#multiCollapseExample1"
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample1"
                      >
                        Edit <i className="fas fa-pen" />
                      </a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div
                          className="collapse multi-collapse"
                          id="multiCollapseExample1"
                        >
                          <form>
                            <div className="form-group">
                              <label>Full Name</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={state.name}
                                onChange={handleInputChange}
                                name="name"
                              />
                              {state.errors.name && (
                                <span className="text-danger">
                                  {state.errors.name}
                                </span>
                              )}
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={state.email}
                                onChange={handleInputChange}
                                name="email"
                              />
                              {state.errors.email && (
                                <span className="text-danger">
                                  {state.errors.email}
                                </span>
                              )}
                            </div>
                            <div className="form-group">
                              <label>Password</label>
                              <input
                                type="password"
                                className="form-control"
                                defaultValue={state.password}
                                onChange={handleInputChange}
                                name="password"
                              />
                            </div>
                            <div className="form-group">
                              <label>Day Phone</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={state.day_phone}
                                onChange={handleInputChange}
                                name="day_phone"
                              />
                            </div>
                            <div className="form-group">
                              <label>Evening Phone</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={state.eve_phone}
                                onChange={handleInputChange}
                                name="eve_phone"
                              />
                            </div>
                            <div className="form-group">
                              <label>Mobile Phone</label>
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={state.mob_phone}
                                onChange={handleInputChange}
                                name="mob_phone"
                              />
                            </div>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-primary update-profile"
                                onClick={hanleEditProfile}
                              >
                                Update
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="address">
            <div className="card">
              <div className="card-header">Address</div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item no-line">
                    <strong>Address 1:</strong>
                    <span className="float-right">
                      {address_1 ? address_1 : ""}
                    </span>
                  </li>
                  <li className="list-group-item no-line">
                    <strong>Address 2:</strong>
                    <span className="float-right">
                      {address_2 ? address_2 : ""}
                    </span>
                  </li>
                  <li className="list-group-item no-line">
                    <strong>City:</strong>
                    <span className="float-right">{city ? city : ""}</span>
                  </li>
                  <li className="list-group-item no-line">
                    <strong>Region:</strong>
                    <span className="float-right">{region ? region : ""}</span>
                  </li>
                  <li className="list-group-item no-line">
                    <strong>Postal Code:</strong>
                    <span className="float-right">
                      {postal_code ? postal_code : ""}
                    </span>
                  </li>
                  <li className="list-group-item no-line">
                    <strong>Counrty:</strong>
                    <span className="float-right">
                      {country ? country : ""}
                    </span>
                  </li>
                  <li className="list-group-item no-line">
                    <strong>Shipping Region:</strong>
                    <span className="float-right">
                      {shipping_region_id ? currentRegion : ""}
                    </span>
                  </li>
                  <li className="list-group-item no-line">
                    <p>
                      <a
                        className="btn btn-danger btn-sm"
                        data-toggle="collapse"
                        href="#multiCollapseExample2"
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample2"
                      >
                        Edit <i className="fas fa-pen" />
                      </a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div
                          className="collapse multi-collapse"
                          id="multiCollapseExample2"
                        >
                          <form>
                            <div className="row">
                              <div className="form-group col-md-6">
                                <label>Address 1</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={state.address_1}
                                  onChange={handleInputChange}
                                  name="address_1"
                                />
                                {state.errors.address_1 && (
                                  <span className="text-danger">
                                    {state.errors.address_1}
                                  </span>
                                )}
                              </div>
                              <div className="form-group col-md-6">
                                <label>Address 2</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={state.address_2}
                                  onChange={handleInputChange}
                                  name="address_2"
                                />
                              </div>
                            </div>

                            <div className="row">
                              <div className="form-group col-md-6">
                                <label>City</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={state.city}
                                  onChange={handleInputChange}
                                  name="city"
                                />
                                {state.errors.city && (
                                  <span className="text-danger">
                                    {state.errors.city}
                                  </span>
                                )}
                              </div>
                              <div className="form-group col-md-6">
                                <label>Region</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={state.region}
                                  onChange={handleInputChange}
                                  name="region"
                                />
                                {state.errors.region && (
                                  <span className="text-danger">
                                    {state.errors.region}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-6">
                                <label>Postal Code</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={state.postal_code}
                                  onChange={handleInputChange}
                                  name="postal_code"
                                />
                                {state.errors.postal_code && (
                                  <span className="text-danger">
                                    {state.errors.postal_code}
                                  </span>
                                )}
                              </div>
                              <div className="form-group col-md-6">
                                <label>Country</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue={state.country}
                                  onChange={handleInputChange}
                                  name="country"
                                />
                                {state.errors.country && (
                                  <span className="text-danger">
                                    {state.errors.country}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="row">
                              <div className="form-group col-md-6">
                                <label>Shipping Region ID</label>
                                <select
                                  className="form-control"
                                  onChange={handleInputChange}
                                  name="shipping_region_id"
                                >
                                  {shippingRegions &&
                                    shippingRegions.length &&
                                    shippingRegions.map(
                                      ({
                                        index,
                                        shipping_region_id,
                                        shipping_region
                                      }) => (
                                        <option
                                          value={shipping_region_id}
                                          key={index}
                                        >
                                          {shipping_region}
                                        </option>
                                      )
                                    )}
                                </select>
                                {state.errors.shipping_region_id && (
                                  <span className="text-danger">
                                    {state.errors.shipping_region_id}
                                  </span>
                                )}
                              </div>
                              <div className="form-group col-md-6 mt-2">
                                <label />
                                <button
                                  type="submit"
                                  className="btn btn-primary mt-4 update-address"
                                  onClick={hanleEditAddress}
                                >
                                  Update
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="credit-card mt-4">
            <div className="card">
              <div className="card-header">Credit Card</div>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item no-line">
                    <strong>Card Number:</strong>
                    <span className="float-right">
                      {credit_card ? credit_card : ""}
                    </span>
                  </li>
                  <li className="list-group-item no-line">
                    <p>
                      <a
                        className="btn btn-danger btn-sm"
                        data-toggle="collapse"
                        href="#multiCollapseExample3"
                        role="button"
                        aria-expanded="false"
                        aria-controls="multiCollapseExample3"
                      >
                        Edit <i className="fas fa-pen" />
                      </a>
                    </p>
                    <div className="row">
                      <div className="col">
                        <div
                          className="collapse multi-collapse"
                          id="multiCollapseExample3"
                        >
                          <form>
                            <div className="form-group">
                              <label>Card Number</label>
                              <input
                                type="text"
                                className="form-control credit_card"
                                defaultValue={credit_card ? credit_card : ""}
                                onChange={handleInputChange}
                                name="credit_card"
                              />
                              {state.errors.credit_card && (
                                <span className="text-danger">
                                  {state.errors.credit_card}
                                </span>
                              )}
                            </div>
                            <div className="form-group">
                              <button
                                type="submit"
                                className="btn btn-primary  update-card"
                                onClick={hanleEditCreditCard}
                              >
                                Update
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
