import React, { useEffect, useState } from "react";
import ImageUploading from 'react-images-uploading';
import Validator from "validator";
import { pick, isEmpty } from 'lodash';

const DEFAULT_ERRORS_STATE = {
  firstName: '',
  lastName: '',
  firstNameError: false,
  lastNameError: false,
  hasError: false,
  message: '',
}

const ProfileForm = ({ onSubmit, teacher }) => {
  const [images, setImages] = React.useState([]);
  const [errors, setErrors] = useState(DEFAULT_ERRORS_STATE);
  const [notice, setNotice] = useState('');
  const [user, updateUser] = useState(pick(teacher, [
    'firstName',
    'lastName',
    'address',
    'username',
    'phoneNumber',
    'profilePic'
  ]));

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

    if (stop) setErrors({ ...errors, hasError: true });
    return !stop;
  };
  console.warn(images)
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
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <div className="upload__image-wrapper w-36 text-center">
              {!images.length &&
                <>
                  <div className="avatar">
                    <div className={`w-36 rounded-xl ${isDragging ? "border border-red-600" : ""}`}>
                      <img
                        className="cursor-pointer"
                        src={user.profilePic || require('../assets/empty_pic.jpeg')}
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
                <div key={index} className="flex-col">
                  <div className="avatar ">
                    <div className="w-36 rounded-xl">
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
      <div className="right-col">
        <div className="mt-6 relative">
          <input
            value={user.firstName}
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
        <div className="my-10 relative">
          <input
            value={user.lastName}
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

        {errors.message &&
          <div className="alert alert-warning shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span>{errors.message}</span>
            </div>
          </div>
        }

        {notice &&
          <div className="alert alert-success shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{notice}</span>
            </div>
          </div>
        }
        <div className="mt-10 relative">
          <input
            type="button"
            onBlur={() => { setNotice(''); setErrors(DEFAULT_ERRORS_STATE); }}
            onClick={() => {
              if (validate(user)) {
                onSubmit(user).then((data) => {
                  isEmpty(data) ? setErrors({
                    ...errors,
                    message: "Could not update profile!"
                  }) : setNotice("Successfully updated profile")
                })
              }
            }}
            value="Update Profile"
            className="mt-10 px-8 py-4 uppercase rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;