
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/ducks/sessionDuck';
import { signup } from '../redux/ducks/userDuck';
import SignupForm from '../components/SignupForm';
import SignInForm from '../components/SignInForm';


const LeftOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">
        Already have an account ?
      </h1>

      <h5 className="text-xl text-white">Sign in with your email and password</h5>
      <div className="mt-16">
        <button
          className="py-3 px-6 bg-transparent rounded-full text-center text-white text-xl font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

const RightOverlayContent = ({ isAnimated, setIsAnimated }) => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-6xl font-bold text-white mb-4">
        Don't have an account ?
      </h1>

      <h5 className="text-xl text-white">Start your journey in one click</h5>
      <div className="mt-16">
        <button
          className="py-3 px-6 bg-transparent rounded-full text-center text-white font-bold uppercase ring-2 ring-white active:scale-110 transition-transform ease-in"
          onClick={(e) => {
            setIsAnimated(!isAnimated);
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

const LoginPage = ({ navigate, login, signup }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const overlayBg = "bg-secondary";

  const onSignUp = (user) => {
    signup(user).then(() => {
      logIn(user);
    });
  }

  const logIn = (user) => {
    return login(user).then((res) => {
      return res;
    });
  }

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="min-h-[85vh] mt-10 w-4/5 bg-white relative overflow-hidden rounded-lg">
        <div className={`bg-white absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out z-20 ${isAnimated ? "translate-x-full opacity-0" : ""}`}>
          <SignInForm onSubmit={logIn} />
        </div>
        <div className={`signup absolute top-0 left-0 h-full w-1/2 flex justify-center items-center transition-all duration-700 ease-in-out ${isAnimated
          ? "translate-x-full opacity-100 z-50 animate-show"
          : "opacity-0 z-10"
          }`}
        >
          <div className="flex justify-center items-center">
            <SignupForm onSubmit={onSignUp} />
          </div>
        </div>

        <div
          className={`overlay-container absolute top-0 left-1/2 w-1/2 h-full overflow-hidden  transition-transform duration-700 ease-in-out z-100 ${isAnimated ? "-translate-x-full" : ""
            }`}
        >
          <div
            className={`overlay ${overlayBg} relative -left-full h-full w-[200%] transform  transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-1/2" : "translate-x-0"
              }`}
          >
            <div
              className={`overlay-left w-1/2 h-full absolute flex justify-center items-center top-0 transform -translate-x-[0%]  transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-0" : "-translate-x-[20%]"
                }`}
            >
              <LeftOverlayContent isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
            </div>
            <div
              className={`overlay-right w-1/2 h-full absolute flex justify-center items-center top-0 right-0 transform  transition-transform duration-700 ease-in-out ${isAnimated ? "translate-x-[20%]" : "translate-x-0"
                }`}
            >
              <RightOverlayContent isAnimated={isAnimated} setIsAnimated={setIsAnimated} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { login, signup })(LoginPage);