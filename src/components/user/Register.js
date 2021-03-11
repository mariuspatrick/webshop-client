import React, { Component } from "react";
import { connect } from "react-redux";

import "App.css";
import { Form, Button } from "react-bootstrap";
import { register } from "app/actions/users";
import { Link } from "react-router-dom";
import "App.css";

class Register extends Component {
  state = {
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, nickname, password, passwordConfirmation } = this.state;

    this.props.dispatch(
      register(nickname, email, password, passwordConfirmation)
    );
  };
  render() {
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
            {this.props.users &&
              this.props.users.errors.email.map((error, index) => {
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
              name="nickname"
              placeholder="Enter nickname"
              value={this.state.nickname}
              onChange={this.handleChange}
            />
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
            {this.props.users &&
              this.props.users.errors.password.map((error, index) => {
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
  users: state.users,
  // userErrors: state.users.errors,
});

export default connect(mapStateToProps)(Register);
