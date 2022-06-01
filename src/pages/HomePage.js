import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute hero min-h-144 bg-white rounded-lg w-4/5 mx-auto mt-20 py-20 shadow-xl">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Link className="btn btn-primary" to="/login">Get Started</Link>
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomePage;
