import React, { Component } from "react";
import { connect } from "react-redux";

import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import { Button } from "react-bootstrap";

import { loadShoppingCart } from "app/actions/shoppingCart";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

class ShoppingCart extends Component {
  async componentDidMount() {
    await this.props.loadShoppingCart();
  }
  render() {
    const loading = !this.props.cart.products;
    const { products } = this.props.cart;

    console.log("redux: ", loading);

    return (
      <div>
        {loading ? (
          <div className="sweet-loading">
            <ClipLoader
              css={override}
              size={100}
              color={"#123abc"}
              loading={loading}
            />
          </div>
        ) : (
          <div>
            {products &&
              products.map((res) => {
                return (
                  <div className="products__box">
                    <div>
                      <h5 style={{ color: "black" }}>{res.title}</h5>
                      <p>{res.description}</p>
                    </div>
                    <h6 style={{ marginRight: "10px", color: "black" }}>
                      {res.price}€
                    </h6>
                    <div style={{ display: "flex", alignItems: "flex-end" }}>
                      <Button style={{ marginRight: "10px" }}>Remove</Button>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.shoppingCart,
});

export default connect(mapStateToProps, { loadShoppingCart })(ShoppingCart);
