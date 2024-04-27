import { connect } from 'react-redux';
import { editProfile, fetch } from '../redux/ducks/userDuck';
import { showAlert } from '../redux/ducks/alertDuck';
import ProfileForm from '../components/ProfileForm';
import React, { useEffect } from 'react';

const ProfilePage = ({ currentUser, teacher, ...props }) => {
  useEffect(() => {
    props.fetch();
  }, []);

  const updateUser = (user) => {
    return props.editProfile(user);
  };

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute bg-white w-4/5 mt-20 rounded-lg p-10 shadow-xl">
        <ProfileForm onSubmit={updateUser} teacher={teacher} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { currentUser } = state.session.session;
  const { teacher } = state.user;

  return {
    currentUser,
    teacher,
  };
};
export default connect(mapStateToProps, { editProfile, fetch })(ProfilePage);
