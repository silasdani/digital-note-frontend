import React, { Component } from 'react'
import { connect } from 'react-redux';
import VideoFrame from '../components/VideoFrame';

class VideoRoomPage extends Component {
  state = {
    users: [{ name: 'John' }, { name: 'Smith' }],
    roomId: 'meowMeow12',
    stream: {}
  }

  render() {
    return (
      <div className="video-room items-center justify-center">
        <div className="box flex flex-wrap xl:grid lg:flex-row md:flex-col">
          <VideoFrame />
        </div>
      </div>
    )
  }
}

export default connect()(VideoRoomPage);