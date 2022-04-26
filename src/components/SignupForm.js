import { useState, useRef } from "react";

const SignupForm = ({ onSubmit }) => {
  const avatarRef = useRef(null);
  const [user, updateUser] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    username: '',
    phoneNumber: '',
    profilePic: '',
    password: '',
    passwordConfirmation: '',
  });

  const onChange = (event) => {
    updateUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const onFileChange = (event) => {
    const file = event.currentTarget.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      updateUser({
        ...user,
        profilePic: reader.result,
      })
    };
    try {
      reader.readAsDataURL(file);
    } catch (e) {
      console.warn(e)
    }
  };

  return (
    <div className="selection:bg-blue-500 selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex-1">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-blue-600">
                Create account
              </h1>

              <form className="mt-10">
                <div className="avatar flex justify-center">
                  <div className="w-24 rounded-full">
                    <input className="hidden" ref={avatarRef} type='file' onClick={onFileChange} />
                    <img className="cursor-pointer" src={user.profilePic || require('../assets/empty_pic.jpeg')} onClick={() => { avatarRef.current.click(); }} />
                  </div>
                </div>
                <div className="mt-10 relative">
                  <input
                    onChange={onChange}
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
                    placeholder="First Name"
                  />
                  <label
                    htmlFor="firstName"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    First Name
                  </label>
                </div>
                <div className="mt-10 relative">
                  <input
                    onChange={onChange}
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
                    placeholder="Last Name"
                  />
                  <label
                    htmlFor="lastName"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Last Name
                  </label>
                </div>
                <div className="mt-10 relative">
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
                <div className="mt-10 relative">
                  <input
                    onChange={onChange}
                    id="passwordConfirmation"
                    type="password"
                    name="passwordConfirmation"
                    className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-blue-600"
                    placeholder="Password Confirmation"
                  />
                  <label
                    htmlFor="passwordConfirmation"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password Confirmation
                  </label>
                </div>

                <input
                  type="button"
                  onClick={() => onSubmit(user)}
                  value="Sign up"
                  className="mt-20 px-8 py-4 uppercase rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;