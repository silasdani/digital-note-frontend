import { useState } from "react";
import Validator from "validator";

const getMessage = (status, data) => {
  switch (status) {
    case 403: return "You need to log in as teacher!"
    case 401: try {
      return data.errors[0]
    } catch (e) {
      return data.error;
    }
    case 404: return "Invalid email or password";
    case 500: return "Something went wrong";
  }
}

const DEFAULT_ERRORS_STATE = {
  email: '',
  password: '',
  emailError: false,
  passwordError: false,
  hasError: false,
  message: '',
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

  return (
    <div className="selection:bg-blue-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-blue-600">
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
                    className="text-input peer placeholder-transparent"
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
                    className="text-input peer placeholder-transparent"
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

                {errors.message &&
                  <div className="alert alert-warning shadow-lg">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                      <span>{errors.message}</span>
                    </div>
                  </div>
                }

                <input
                  onClick={() => {
                    setErrors(DEFAULT_ERRORS_STATE);
                    if (validate(user)) {
                      onSubmit(user).then(({ data, status }) => {
                        setErrors({
                          ...errors,
                          message: getMessage(status, data)
                        })
                      })
                    }
                  }}
                  type="button"
                  value="Sign in"
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer"
                />
              </div>
              <a
                href="#"
                className="mt-4 block text-sm text-center font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
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