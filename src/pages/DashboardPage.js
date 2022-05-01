import React, { Component } from 'react';
import { connect } from 'react-redux';
import gravatar from 'gravatar'
// import { fetchUsers } from '../redux/ducks/userDuck';
class DashboardPage extends Component {
  // renderUsers = (users) => {
  //   return users?.map(({ attributes: { email, first_name, last_name } }) => {
  //     return (
  //       <div className="section-item">
  //         <img className="h-12 rounded-2xl mr-4 float-left" src={gravatar.url(email)} />
  //         <div className="float-right">
  //           {first_name} {last_name}
  //         </div>
  //       </div>
  //     )
  //   })
  // }

  render() {
    const { currentUser } = this.props;
    return (
      <div className="flex flex-col items-center h-full w-full">
        <div className="absolute hero min-h-144 bg-white rounded-lg w-4/5 mx-auto mt-20 py-20">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">Hello there {currentUser.name}</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUser } = state.session.session;
  return {
    currentUser
  };
}

export default connect(mapStateToProps)(DashboardPage);
