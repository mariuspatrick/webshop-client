import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';

const useStyles = theme => ({
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
    anchorEl: null
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
    // const classes = useStyles();
    const { classes } = this.props;
    const open = this.state.anchorEl;
    
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Sign up</Button>
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

export default withStyles(useStyles)(MenuAppBar)