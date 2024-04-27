import { useState } from "react";
import Validator from "validator";

const DEFAULT_ERRORS_STATE = {
  email: '',
  password: '',
  emailError: false,
  passwordError: false,
  hasError: false,
}

const SignInForm = ({ onSubmit }) => {
  const [errors, setErrors] = useState(DEFAULT_ERRORS_STATE);
  const [user, setUser] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const onRememberMe = () => {
    setUser({
      ...user,
      rememberMe: !user.rememberMe
    })
  }

  const validate = (data) => {
    let stop = true;
    if (!Validator.isEmail(data.email)) {
      stop = false;
      setErrors({ ...errors, email: "Email is not an email!", emailError: true, hasError: true });
    }
    if (!data.password) {
      setErrors({ ...errors, passwordError: true, hasError: true });
      stop = false;
    }
    return stop;
  };

  const handleClick = () => {
    setErrors(DEFAULT_ERRORS_STATE);
    if (!validate(user)) return;

    onSubmit(user)
  }

  return (
    <div className="selection:bg-secondary selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-secondary">
                Welcome back now!
              </h1>

              <div className="mt-12">
                <div className="relative">
                  <input
                    onChange={onChange}
                    onBlur={() => setErrors(DEFAULT_ERRORS_STATE)}
                    id="email"
                    name="email"
                    type="text"
                    className="text-input peer placeholder-transparent pl-2"
                    placeholder="john@doe.com"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${errors.emailError ? 'text-error' : ''}`}
                  >
                    Email address
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    onChange={onChange}
                    id="password"
                    type="password"
                    name="password"
                    className="text-input peer placeholder-transparent pl-2"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className={`absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm ${errors.passwordError ? 'text-error' : ''}`}
                  >
                    Password
                  </label>
                </div>
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input onChange={onRememberMe} id="rememberMe" name="rememberMe" type="checkbox" checked={user.rememberMe} className="checkbox" />
                </label>
                <input
                  onClick={handleClick}
                  type="button"
                  value="Sign in"
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-secondary hover:bg-secondary text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-secondary focus:ring-opacity-80 cursor-pointer"
                />
              </div>
              <a
                href="#"
                className="mt-4 block text-sm text-center font-medium text-secondary hover:underline focus:outline-none focus:ring-2 focus:ring-secondary"
              >
                {" "}
                Forgot your password?{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default SignInForm;