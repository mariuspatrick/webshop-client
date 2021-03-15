import React, { Component } from "react";
import { connect } from "react-redux";

import { loadProducts } from "app/actions/products";
import { withStyles } from "@material-ui/core/styles";
import {
  CardActions,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { Card, Button } from "react-bootstrap";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});

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
    const { classes } = this.props;
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
            <Grid container spacing={3}>
              {data &&
                data.map((product, index) => {
                  return (
                    <Grid item xs={6} key={index}>
                      <Card className={classes.root}>
                        <CardContent>
                          <Typography
                            style={{ color: "black" }}
                            gutterBottom
                            variant="h5"
                            component="h2"
                          >
                            {product.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {product.description}
                          </Typography>
                        </CardContent>
                        <CardActions
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          {this.props.user.token && (
                            <Button
                              style={{
                                backgroundColor: "#3f51b5",
                                color: "#fff",
                              }}
                              variant="contained"
                              color="primary"
                            >
                              Add to cart
                            </Button>
                          )}
                          <Typography style={{ marginRight: "10px" }}>
                            Price: {product.price} €
                          </Typography>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.users.user,
});

export default connect(mapStateToProps, { loadProducts })(
  withStyles(useStyles)(ProductsList)
);
