import React, { Component } from 'react';
import { connect } from 'react-redux';
import gravatar from 'gravatar'

class DashboardPage extends Component {

  renderUsers = (users) => {
    return users?.map(({ name, email }) => {
      return (<div className="section-item">
        <img className="max-h-14 rounded-full mr-4" src={gravatar.url(email)} />
        {name}
      </div>)
    })
  }

  render() {
    const { users } = this.props;

    return <div className="dashboard">
      <div className="side-section" >
        {this.renderUsers(users)}
      </div>
    </div>;
  }
}

const mapStateToProps = (state) => {
  const users = [
    {
      name: "Silas Daniel",
      email: "danielsilas32@gmail.com"
    },
    {
      name: "Silas Daniel",
      email: "danielsilas32@gmail.com"
    },
    {
      name: "Silas Daniel",
      email: "danielsilas32@gmail.com"
    },
    {
      name: "Silas Daniel",
      email: "danielsilas32@gmail.com"
    },
    {
      name: "Silas Daniel",
      email: "danielsilas32@gmail.com"
    },
    {
      name: "Silas Daniel",
      email: "danielsilas32@gmail.com"
    },
    {
      name: "Silas Daniel",
      email: "danielsilas32@gmail.com"
    },
    {
      name: "Silas Daniel",
      email: "danielsilas32@gmail.com"
    },
    {
      name: "Silas Daniel",
      email: "danielsilas32@gmail.com"
    },
  ]
  return {
    users
  };
}

const mapDispatchToProps = (dispatch) => {

  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
