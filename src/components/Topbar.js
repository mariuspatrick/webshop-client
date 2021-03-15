import React, { Component } from "react";
import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import history from "history.js";
import { logout } from "app/actions/users";
import LoginModal from "components/user/LoginModal";
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
});

class MenuAppBar extends Component {
  state = {
    // auth: true,
    anchorEl: null,
  };

  // handleChange = (event) => {
  //   this.setState({ auth: true });
  // };

  handleMenu = (event) => {
    this.setState({ anchorEl: event });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const unauthenticated = !this.props.user.token;
    const { user: { token, name } = {} } = this.props;
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Button color="inherit" onClick={() => history.push("/")}>
              Home
            </Button>
            <Typography variant="h6" className={classes.title}></Typography>
            {unauthenticated ? (
              <div style={{ display: "flex" }}>
                <LoginModal />
                <Button
                  color="inherit"
                  onClick={() => history.push("/sign-up")}
                >
                  Sign up
                </Button>
              </div>
            ) : (
              token && (
                <div style={{ display: "flex" }}>
                  <Typography
                    style={{ alignContent: "flex-end", marginRight: "2  0px" }}
                    variant="h6"
                    className={classes.title}
                  >
                    Welcome {name}!
                  </Typography>
                  <Button
                    color="inherit"
                    onClick={() => this.props.dispatch(logout())}
                  >
                    Log out
                  </Button>
                </div>
              )
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
  user: state.users.user,
  errors: state.users.errors,
});

export default connect(mapStateToProps)(withStyles(useStyles)(MenuAppBar));
