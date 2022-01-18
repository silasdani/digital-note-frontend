import React, { Component } from 'react'
import { connect } from 'react-redux';

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
                    <div className="m-2 h-max-56 w-min-56 bg-yellow-300">Video</div>
                    <div className="m-2 h-max-56 w-min-56 bg-yellow-300">Video</div>
                    <div className="m-2 h-max-56 w-min-56 bg-yellow-300">Video</div>
                    <div className="m-2 h-max-56 w-min-56 bg-yellow-300">Video</div>
                </div>
            </div>
        )
    }
}

export default connect()(VideoRoomPage);