import ImageUploading from 'react-images-uploading';
import React, { useState } from "react";
import Validator from "validator";

const DEFAULT_ERRORS_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  firstNameError: false,
  lastNameError: false,
  emailError: false,
  passwordError: false,
  passwordConfirmationError: false,
  hasError: false,
}

const SignupForm = ({ onSubmit }) => {
  const [images, setImages] = React.useState([]);
  const [errors, setErrors] = useState(DEFAULT_ERRORS_STATE);
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

  const onFileChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
    if (imageList.length > 0) updateUser({
      ...user,
      profilePic: imageList[0]?.data_url,
    })
  };

  const validate = (data) => {
    let stop = false;
    let errors = DEFAULT_ERRORS_STATE;

    if (Validator.isEmpty(data.firstName)) {
      stop = true;
      errors.firstName = "First Name can't be empty";
      errors.firstNameError = true;
    }

    if (Validator.isEmpty(data.lastName)) {
      stop = true;
      errors.lastName = "First Name can't be empty";
      errors.lastNameError = true;
    }

    if (!Validator.isEmail(data.email)) {
      stop = true;
      errors.email = "Email is not an email";
      errors.emailError = true;
    }

    if (Validator.isEmpty(data.password)) {
      errors.password = "Password can't be empty";
      errors.passwordError = true;
      stop = true;
    }

    if (data.password != data.passwordConfirmation) {
      errors.password = "Passwords must match";
      errors.passwordError = true;
      errors.passwordConfirmationError = true;
      stop = true;
    }

    if (!Validator.isLength(data.password, { min: 8, max: 50 })) {
      errors.password = "Password must at least 8 characters";
      errors.passwordError = true;
      stop = true;
    }

    if (stop) setErrors({ ...errors, hasError: true });
    return !stop;
  };

  const handleClick = () => {
    if (!validate(user)) return;

    onSubmit(user)
  }

  return (
    <div className="selection:bg-primary selection:text-white">
      <div className="flex justify-center items-center">
        <div className="p-8 flex">
          <div className="mx-auto overflow-hidden">
            <div className="p-8">
              <h1 className="text-5xl font-bold text-secondary">
                Create account
              </h1>
              <div className="mt-4">
                <div className="flex justify-center">
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onFileChange}
                    maxNumber={1}
                    dataURLKey="data_url"
                  >
                    {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                    }) => (
                      <div className="upload__image-wrapper items-center text-center">
                        {!images.length &&
                          <>
                            <div className="avatar">
                              <div className={`w-16 rounded-full ${isDragging ? "border border-red-600" : ""}`}>
                                <img
                                  className="cursor-pointer"
                                  src={require('../assets/empty_pic.jpeg')}
                                  style={isDragging ? { color: 'red' } : undefined}
                                  onClick={onImageUpload}
                                  {...dragProps}
                                />
                              </div>
                            </div>
                            <div className="image-item__btn-wrapper">
                              <button className="badge badge-ghost" onClick={onImageUpload}>Upload Image</button>
                            </div>
                          </>
                        }
                        {imageList.map((image, index) => (
                          <div key={index} className="flex-col items-center text-center">
                            <div className="avatar ">
                              <div className="w-24 rounded-full">
                                <img className="cursor-pointer" src={image['data_url']} alt="" />
                              </div>
                            </div>
                            <div className="image-item__btn-wrapper">
                              <button className="badge badge-ghost" onClick={() => onImageRemove(index)}>Remove</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ImageUploading>
                </div>

                <div className="mt-2 relative">
                  <input
                    onBlur={() => setErrors(DEFAULT_ERRORS_STATE)}
                    onChange={onChange}
                    id="firstName"
                    name="firstName"
                    type="text"
                    className={`text-input peer placeholder-transparent ${errors.firstNameError ? "border-red-600" : ''}`}
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
                    onBlur={() => setErrors(DEFAULT_ERRORS_STATE)}
                    onChange={onChange}
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={`text-input peer placeholder-transparent ${errors.lastNameError ? "border-red-600" : ''}`}
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
                    onBlur={() => setErrors(DEFAULT_ERRORS_STATE)}
                    onChange={onChange}
                    id="email"
                    name="email"
                    type="text"
                    className={`text-input peer placeholder-transparent ${errors.emailError ? "border-red-600" : ''}`}
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
                    onBlur={() => setErrors(DEFAULT_ERRORS_STATE)}
                    onChange={onChange}
                    id="password"
                    type="password"
                    name="password"
                    className={`text-input peer placeholder-transparent ${errors.passwordError ? "border-red-600" : ''}`}
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
                    onBlur={() => setErrors(DEFAULT_ERRORS_STATE)}
                    onChange={onChange}
                    id="passwordConfirmation"
                    type="password"
                    name="passwordConfirmation"
                    className={`text-input peer placeholder-transparent ${errors.passwordConfirmationError ? "border-red-600" : ''}`}
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
                  onClick={handleClick}
                  value="Sign up"
                  className="mt-10 px-8 py-4 uppercase rounded-full bg-primary hover:bg-primary text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default SignupForm;