import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Form, Button } from "react-bootstrap";

import { withStyles } from "@material-ui/core/styles";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import MaterialButton from "@material-ui/core/Button";

import history from "history.js";
import { login } from "app/actions/users";

const useStyles = (theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    // maxWidth: "80%",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

class LoginModal extends Component {
  state = {
    email: "",
    password: "",
    open: false,
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    this.props.dispatch(login(email, password));
  };

  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { errors: { error } = {} } = this.props;
    return (
      <div>
        <MaterialButton color="inherit" onClick={this.handleOpen}>
          Log in
        </MaterialButton>
        <Modal
          // style={{ width: "1200px" }}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={this.state.open}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={this.state.open}>
            <div className={classes.paper}>
              {/* <h2 id="transition-modal-title">Transition modal</h2>
              <p id="transition-modal-description">
                react-transition-group animates me.
              </p> */}
              <Form className="submit-form">
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  {
                    error
                      ? error.includes("email") && (
                          <p className="info__errors">{error}</p>
                        )
                      : ""
                    // error.map((error, index) => {
                    //   return (
                    //     <p className="info__errors" key={index}>
                    //       {error}
                    //     </p>
                    //   );
                    // }
                  }
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  {error
                    ? error.includes("password") && (
                        <p className="info__errors">{error}</p>
                      )
                    : ""}
                </Form.Group>
                <div className="d-flex submit-buttons__container">
                  <Button
                    className="mr-auto submit-button"
                    variant="primary"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                  <Link
                    onClick={() => {
                      history.push("/sign-up");
                      this.handleClose();
                    }}
                    className="ml-auto mt-auto link-button"
                  >
                    Create account
                  </Link>
                </div>
              </Form>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  errors: state.users.errors,
});

export default connect(mapStateToProps)(withStyles(useStyles)(LoginModal));
