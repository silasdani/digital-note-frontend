import React, { useState } from 'react';
import AgoraUIKit from 'agora-react-uikit';

const VideoFrame = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '68129a5810594776822d78dcd6e8b39b',
    channel: 'https://console.agora.io/invite?sign=2288dc67c6d4e6e0d137d2f53c9225f8%253Aef061159d61b427137f628b6126c6cd310857ce274e60de842ab6f2b047a8a53', // your agora channel
    token: '00668129a5810594776822d78dcd6e8b39bIABwRiQoeOh1iPPHA6Wkhg/XYPSkks9lxAM/KA4f6fQpQGTNKL8AAAAAEAAxc9bWE48KYgEAAQATjwpi' // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <div className="mx-auto" >
      <div style={{ display: 'flex', width: 500, height: 500 }}>
        <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
      </div>
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
  );
};

export default VideoFrame;