import React from 'react';
import { Resizable, ResizableBox } from 'react-resizable';
import { connect } from 'react-redux';
class VideoFrame extends React.Component {
    state = {
        width: 200,
        height: 200,
    };

    // On top layout
    onResize = (event, { element, size, handle }) => {
        this.setState({ width: size.width, height: size.height });
    };

    render() {
        return (
            <Resizable height={this.state.height} width={this.state.width} onResize={this.onResize} style={{borderWidth:'2px'}}>
              <div className="box" style={{width: this.state.width + 'px', height: this.state.height + 'px'}}>
                <span>Contents</span>
              </div>
            </Resizable>
          );
    }
}

export default connect()(VideoFrame);