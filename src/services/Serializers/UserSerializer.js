const SERVICE_URL = "http://localhost:3000";

export default class UserSerializer {
  static serialize(user) {
    const result = {
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      username: user.username,
      password: user.password,
      password_confirmation: user.passwordConfirmation,
    }

    if (user.profilePic?.startsWith("data:")) {
      result['profile_pic'] = user.profilePic;
    }

    return { user: result };
  }

  static deserialize(user) {
    const result = {
      id: user.id,
      address: user.address,
      createdAt: user.created_at,
      email: user.email,
      firstName: user.first_name,
      lastName: user.last_name,
      name: user.name,
      phoneNumber: user.phone_no,
      username: user.username,
    }

    if (user.profile_pic) {
      result['profilePic'] = !`${user.profile_pic}`?.startsWith(SERVICE_URL)
        ? `${SERVICE_URL}${user.profile_pic}`
        : user.profile_pic;
    }

    return result;
  }
}