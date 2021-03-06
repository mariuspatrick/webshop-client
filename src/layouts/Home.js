import React, { Component } from "react";
// import api from '../api';
import { withStyles } from "@material-ui/core/styles";
import ProductsList from "pages/products/ProductsList";
import Topbar from "pages/Topbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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

class Home extends Component {
  render() {
    // this.state.data && console.log('res: ', this.data);
    // const data = this.state.data;
    const { classes } = this.props;
    return (
      <div>
        <Topbar />
        <Grid container spacing={3}>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <ProductsList />
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.paper}>xs</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(useStyles)(Home);
