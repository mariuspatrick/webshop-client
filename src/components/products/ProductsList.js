import React, { Component } from "react";
import { loadProducts } from "app/actions/products";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import { Card, Col, Row, Button, CardDeck } from "react-bootstrap";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class ProductsList extends Component {
  async componentDidMount() {
    this.props.loadProducts();
  }
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const loading = !this.props.products;
    const data = this.props.products;
    // console.log("data: ", data);
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
            {data.map((res, index) => {
              if ((index + 1) % 2 === 0) {
                console.log('res.index + 1: ', index + 1);
                return (
                  <div className="row">
                    <div className="col">
                      <div className="card">
                        <div className="card-body">
                          <h5 className="card-title">{res.title}</h5>
                          <p className="card-text">{res.description}</p>
                          <button className="btn btn-primary">Buy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              } else {
                return (
                  <div className="col">
                    <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{res.title}</h5>
                      <p className="card-text">{res.description}</p>
                      <button className="btn btn-primary">Buy</button>
                    </div>
                  </div>
                </div>
                )
              }
              // return (
                // <div className="col-sm-6">
                //   <div className="card">
                //     <div className="card-body">
                //       <h5 className="card-title">{res.title}</h5>
                //       <p className="card-text">{res.description}</p>
                //       <button className="btn btn-primary">Buy</button>
                //     </div>
                //   </div>
                // </div>
              // )
            })}
          </div>
          // <CardDeck className="row">
          //   {data.map((res) => {
          //     return (
          //       <div className="col-sm-6" id={res.id} style={{ display:"inline-block" }}>
          //         <Card style={{ width: "18rem" }}>
          //           {/* <Card.Img variant="top"  /> */}
          //           <Card.Body>
          //             <Card.Title>{res.title}</Card.Title>
          //             <Card.Text>{res.description}</Card.Text>
          //             <Button variant="primary">Add to cart</Button>
          //           </Card.Body>
          //           <Card.Footer>
          //             <small className="text-muted">{res.price}</small>
          //           </Card.Footer>
          //         </Card>
          //       </div>
          //     );
          //   })}
          // </CardDeck>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { loadProducts })(ProductsList);
