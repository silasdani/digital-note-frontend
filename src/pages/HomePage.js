import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { accessExam } from '../redux/ducks/examDuck'

const HomePage = ({ navigate, ...props }) => {
  const [accessKey, setAccessKey] = useState('');

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute hero min-h-144 bg-white rounded-lg w-4/5 mx-auto mt-20 py-20 shadow-xl">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <input type="text"
              className="input input-bordered input-primary text-lg mr-10"
              placeholder="Exam Access Key"
              value={accessKey}
              onChange={(ev) => {
                setAccessKey(ev.target.value)
              }}
            />
            {/* <Link className="btn btn-primary" to="/workspace">Get Started</Link> */}
            <button className="btn btn-primary" onClick={() => {
              props.accessExam(accessKey)
                .then((data) => {
                  console.warn(data)
                  if (data) navigate('/workspace')
                });
            }}>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default connect(null, { accessExam })(HomePage);
