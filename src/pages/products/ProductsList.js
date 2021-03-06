import React, { Component } from "react";
import { loadProducts } from "app/actions/products";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import { Card, Col, Row, Button, CardDeck } from "react-bootstrap";
// import api from '../../api';

class ProductsList extends Component {
  async componentDidMount() {
    this.props.loadProducts();
  }

  render() {
    const loading = !this.props.products;
    const data = this.props.products;
    console.log("data: ", data);
    return (
      <div>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <CardDeck>
            {data.map((res) => {
              return (
                <Col id={res.id}>
                  <div>
                    {/* <h2 key={res.id}>{res.title}</h2> */}
                    <Card style={{ width: "18rem" }}>
                      {/* <Card.Img variant="top"  /> */}
                      <Card.Body>
                        <Card.Title>{res.title}</Card.Title>
                        <Card.Text>{res.description}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                      <Card.Footer>
                        <small className="text-muted">{res.price}</small>
                      </Card.Footer>
                    </Card>
                  </div>
                </Col>
              );
            })}
          </CardDeck>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { loadProducts })(ProductsList);
