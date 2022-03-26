import React, { Component } from 'react';
import { connect } from 'react-redux';
import gravatar from 'gravatar'
import { fetchUsers } from '../redux/ducks/userDuck';
class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.props.fetchUsers()
  }

  renderUsers = (users) => {
    return users?.map(({ attributes: { email, first_name, last_name } }) => {
      return (
        <div className="section-item">
          <img className="h-12 rounded-2xl mr-4 float-left" src={gravatar.url(email)} />
          <div className="float-right">
            {first_name} {last_name}
          </div>
        </div>
      )
    })
  }

  render() {
    const { users } = this.props;
    console.warn(this.props);
    return <div className="dashboard">
      <div className="side-section" >
        {this.renderUsers(users)}
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  const users = state.user.users;
  return {
    users
  };
}

export default connect(mapStateToProps, { fetchUsers })(DashboardPage);
