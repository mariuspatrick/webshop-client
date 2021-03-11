import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import history from "history.js";
import { connect } from "react-redux";

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
    auth: true,
    anchorEl: null,
  };

  handleChange = (event) => {
    this.setState({ auth: true });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    // let history = useHistory();
    // const classes = useStyles();
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
            <Button color="inherit" onClick={() => history.push("/log-in")}>
              Log in
            </Button>
            <Button color="inherit" onClick={() => history.push("/sign-up")}>
              Sign up
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );

    // return (
    //   <div className={classes.root}>
    //     <AppBar position="static">
    //       <Toolbar>
    //         <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
    //           <MenuIcon />
    //         </IconButton>
    //         <Typography variant="h6" className={classes.title}>
    //           Menu
    //         </Typography>
    //         {this.state.auth && (
    //           <div>
    //             <IconButton
    //               aria-label="account of current user"
    //               aria-controls="menu-appbar"
    //               aria-haspopup="true"
    //               onClick={this.handleMenu}
    //               color="inherit"
    //             >
    //               <AccountCircle />
    //             </IconButton>
    //             <Menu
    //               id="menu-appbar"
    //               anchorEl={this.state.anchorEl}
    //               anchorOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'right',
    //               }}
    //               keepMounted
    //               transformOrigin={{
    //                 vertical: 'top',
    //                 horizontal: 'right',
    //               }}
    //               open={open}
    //               onClose={this.handleClose}
    //             >
    //               <MenuItem onClick={this.handleClose}>Profile</MenuItem>
    //               <MenuItem onClick={this.handleClose}>My account</MenuItem>
    //             </Menu>
    //           </div>
    //         )}
    //       </Toolbar>
    //     </AppBar>
    //   </div>
    // );
  }
}

const mapStateToProps = (state) => {
  // console.log("redux state: ", state);
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(withStyles(useStyles)(MenuAppBar));
