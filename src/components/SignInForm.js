import { useState } from "react";
import Validator from "validator";

const SignInForm = ({ onSubmit }) => {
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

  // const validate = (data) => {
  //   const errors = {};
  //   if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
  //   if (!data.password) errors.password = "Can't be blank";
  //   return errors;
  // };

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
                    id="email"
                    name="email"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
                    placeholder="john@doe.com"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>

                <label class="label cursor-pointer">
                  <span class="label-text">Remember me</span>
                  <input onChange={onRememberMe} id="rememberMe" name="rememberMe" type="checkbox" checked={user.rememberMe} class="checkbox" />
                </label>

                <input
                  onClick={() => {
                    onSubmit(user)
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
    </div>
  );
};

export default SignInForm;