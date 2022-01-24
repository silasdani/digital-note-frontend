
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login } from '../redux/ducks/sessionDuck'
import Validator from "validator";

class LoginPage extends Component {
  state = {
    data: {
      email: "",
      password: ""
    },
    errors: {},
    loading: false,
  }

  onChange = (ev) =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [ev.target.name]: ev.target.value },
    });


  onLogin = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.setState({ loading: true });
      this.props.login(this.state.data)
        .then((res) => {
          // console.warn(res)
          this.props.history.push("/")
        })
        .catch(() => {
          this.setState({
            errors: { global: "Invalid email or password" },
            loading: false,
          });
        });
    }
  };

  validate = (data) => {
    console.warn(data)
    const errors = {};
    if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
    if (!data.password) errors.password = "Can't be blank";
    return errors;
  };

  render() {
    return (
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-1/2 mx-auto mt-10">
        <div className="mb-4">
          <label className="block text-grey-darker text-sm font-bold mb-2" for="username">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-grey-darker text-sm font-bold mb-2" for="password">
            Password
          </label>
          <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" id="password" type="password" placeholder="******************" />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue hover:bg-blue-600 bg-blue-700 btn text-white font-bold py-2 px-4 rounded" type="button" onClick={this.onLogin}>
            Sign In
          </button>
          <a className="btn inline-block align-baseline font-bold text-sm text-blue" href="/signup">
            Forgot Password?
          </a>
        </div>
      </div>)
  }

}

export default connect(null, { login })(LoginPage);