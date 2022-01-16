
import React, { Component } from 'react'
import { connect } from 'react-redux';
import login from '../redux/ducks/sessionDuck'
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
                .then(() => this.props.history.push("/dashboard"))
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
            <div className="flex justify-center items-center flex-col w-screen h-screen">
                <div className="flex justify-center items-center flex-col w-screen h-screen">
                    <i className="text-white -rotate-6">Email</i>
                    <input name="email" className="italic h-8 w-1/3 px-3 -rotate-6" type="text" value={this.state.email} onChange={this.onChange} />
                    <i className="text-white -rotate-6">Password</i>
                    <input name="password" className="italic h-8 w-1/3 px-3 -rotate-6" type="password" value={this.state.password} onChange={this.onChange} />
                    {/* <input className="italic btn -rotate-6" type="button" value="SIGN IN" onClick={this.onLogin} /> */}
                    <button className="italic btn -rotate-6" type="button" value="SIGN IN" onClick={this.onLogin} />
                </div>
            </div>
        )
    }
}

export default connect(null, { login })(LoginPage);