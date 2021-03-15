import React, { Component } from "react";
import { connect } from "react-redux";

import { Form, Button } from "react-bootstrap";
import { register } from "app/actions/users";
import { Link } from "react-router-dom";
import { userErrors } from "app/actions/users";
import "App.css";

class Register extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    passwordConfirmation: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (event.target.value === "")
      this.props.dispatch(
        userErrors({
          ...this.props.errors,
          [event.target.name]: [],
        })
      );
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, name, password, passwordConfirmation } = this.state;

    this.props.dispatch(register(name, email, password, passwordConfirmation));
  };
  render() {
    const { errors } = this.props;
    return (
      <div className="submit-form__container">
        <Form className="submit-form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {errors.email &&
              errors.email.map((error, index) => {
                return (
                  <p className="info__errors" key={index}>
                    {error}
                  </p>
                );
              })}
          </Form.Group>
          <Form.Group>
            <Form.Label>Nickname</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="Enter nickname"
              value={this.state.name}
              onChange={this.handleChange}
            />
            {errors.name &&
              errors.name.map((error, index) => {
                return (
                  <p className="info__errors" key={index}>
                    {error}
                  </p>
                );
              })}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {errors.password &&
              errors.password.map((error, index) => {
                return (
                  <p className="info__errors" key={index}>
                    {error}
                  </p>
                );
              })}
          </Form.Group>
          <Form.Group controlId="retypePassword">
            <Form.Label>Re-type password</Form.Label>
            <Form.Control
              type="password"
              name="passwordConfirmation"
              placeholder="Type password again"
              value={this.state.passwordConfirmation}
              onChange={this.handleChange}
            />
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
            <Link className="ml-auto mt-auto link-button">
              Already have an account? Log in
            </Link>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.token,
  errors: state.users.errors,
  // userErrors: state.users.errors,
});

export default connect(mapStateToProps)(Register);
