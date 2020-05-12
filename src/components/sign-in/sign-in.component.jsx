import React from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";


import "./sign-in.styles.scss";

export default class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
  };
  handleChange = (event) => {
    const { name, value } = event.target;
  };

  render() {
    return (
      <div className="sign-in">

        <form onSubmit={this.handleSubmit}>

        <FormInput
            handleChange={this.handleChange}
            required
          />

          <FormInput
            handleChange={this.handleChange}
            required
          />

        </form>
      </div>
    );
  }
}
