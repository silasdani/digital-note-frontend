import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import Validator from 'validator';
import { pick } from 'lodash';

const DEFAULT_ERRORS_STATE = {
  firstName: '',
  lastName: '',
  firstNameError: false,
  lastNameError: false,
  hasError: false,
};

const ProfileForm = ({ onSubmit, teacher, ...props }) => {
  const [images, setImages] = React.useState([]);
  const [errors, setErrors] = useState(DEFAULT_ERRORS_STATE);
  const [user, updateUser] = useState(
    pick(teacher, ['firstName', 'lastName', 'address', 'username', 'phoneNumber', 'profilePic'])
  );

  const onChange = (event) => {
    updateUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const onFileChange = (imageList) => {
    setImages(imageList);
    if (imageList.length > 0)
      updateUser({
        ...user,
        profilePic: imageList[0]?.data_url,
      });
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

    if (stop) setErrors({ ...errors, hasError: true });
    return !stop;
  };

  const handleClick = () => {
    setErrors(DEFAULT_ERRORS_STATE);
    if (!validate(user)) return;

    onSubmit(user);
  };

  return (
    <div className="flex flex-row space-x-10">
      <div className="left-col">
        <ImageUploading
          multiple
          value={images}
          onChange={onFileChange}
          maxNumber={3}
          dataURLKey="data_url"
        >
          {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
            <div className="upload__image-wrapper w-36 text-center">
              {!images.length && (
                <>
                  <div className="avatar">
                    <div className={`w-36 rounded-xl ${isDragging ? 'border border-red-600' : ''}`}>
                      <img
                        className="cursor-pointer"
                        src={user.profilePic || require('../assets/empty_pic.jpeg')}
                        onClick={onImageUpload}
                        {...dragProps}
                      />
                    </div>
                  </div>
                  <div className="image-item__btn-wrapper">
                    <button className="badge badge-ghost" onClick={onImageUpload}>
                      Upload Image
                    </button>
                  </div>
                </>
              )}
              {imageList.map((image, index) => (
                <div key={index} className="flex-col">
                  <div className="avatar ">
                    <div className="w-36 rounded-xl">
                      <img className="cursor-pointer" src={image['data_url']} alt="" />
                    </div>
                  </div>
                  <div className="image-item__btn-wrapper">
                    <button className="badge badge-ghost" onClick={() => onImageRemove(index)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
      <div className="right-col">
        <div className="mt-6 relative">
          <input
            value={user.firstName}
            onBlur={() => setErrors(DEFAULT_ERRORS_STATE)}
            onChange={onChange}
            id="firstName"
            name="firstName"
            type="text"
            className={`text-input peer placeholder-transparent ${
              errors.firstNameError ? 'border-red-600' : ''
            }`}
            placeholder="First Name"
          />
          <label
            htmlFor="firstName"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            First Name
          </label>
        </div>
        <div className="my-10 relative">
          <input
            value={user.lastName}
            onBlur={() => setErrors(DEFAULT_ERRORS_STATE)}
            onChange={onChange}
            id="lastName"
            name="lastName"
            type="text"
            className={`text-input peer placeholder-transparent ${
              errors.lastNameError ? 'border-red-600' : ''
            }`}
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
            type="button"
            onClick={handleClick}
            value="Update Profile"
            className="mt-10 px-8 py-4 uppercase rounded-full bg-primary hover:bg-secondary text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-secondary focus:ring-opacity-80 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
