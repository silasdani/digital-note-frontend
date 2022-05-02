import { connect } from 'react-redux';
import { editUser } from '../redux/ducks/userDuck';
import ImageUploading from 'react-images-uploading';
import React, { useState } from "react";

const ProfilePage = () => {
  const [images, setImages] = React.useState([]);
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
  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute bg-white w-4/5 mt-20 rounded-lg p-10 shadow-xl">
        <div className="">
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
                          src={require('../assets/empty_pic.jpeg')}
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
          <div className="">
            miau
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { currentUser } = state.session.session;

  return {
    currentUser
  }
}
export default connect(mapStateToProps, { editUser })(ProfilePage)