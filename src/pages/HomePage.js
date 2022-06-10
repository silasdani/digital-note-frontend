import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { accessExam } from '../redux/ducks/examDuck'
import { createContestant } from '../redux/ducks/lobbyDuck'
import { isEmpty, omit } from 'lodash';

const HomePage = ({ navigate, ...props }) => {
  const [contestant, setContestant] = useState({
    accessKey: 'JP562',
    firstName: '',
    lastName: '',
    email: '',
    studentClass: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    accessKey: false,
  });
  const modalRef = useRef();

  const onChange = (e) => {
    setContestant({
      ...contestant,
      [e.target.name]: e.target.value
    })
  }

  const onGetStarted = () => {
    props.accessExam(contestant.accessKey)
      .then((data) => {
        if (data) {
          modalRef.current?.click();
        }
      });
  }

  const onEnterExam = () => {
    const localErrors = Object.keys(errors).reduce((res, key) => {
      res[key] = isEmpty(contestant[key]);
      return res
    }, {})

    setErrors({ ...errors, ...localErrors })

    if (Object.values(localErrors).some(v => v)) {
      return;
    }

    props.createContestant(contestant)
      .then(() => navigate('/workspace'))
  }

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute hero min-h-144 bg-white rounded-lg w-4/5 mx-auto mt-20 py-20 shadow-xl">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">In order to take an exam you need to have a valid access key.</p>
            <input
              type="text"
              name="accessKey"
              className="input input-bordered input-primary text-lg mr-10"
              placeholder="Exam Access Key"
              value={contestant.accessKey}
              onChange={onChange}
            />
            <button className="btn btn-primary" onClick={onGetStarted}>Get Started</button>
          </div>

          <label htmlFor="key-modal" ref={modalRef} className="btn btn-ghost btn-xs hidden"></label>

          <input type="checkbox" id="key-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-[70vw] flex flex-col items-center">
              <h1 className="text-4xl">Contestant</h1>

              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">First Name</span>
                  {errors.firstName && <span className="label-text-alt text-red-600">required field</span>}
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Type here"
                  className="input input-bordered input-success w-full max-w-lg"
                  value={contestant.firstName}
                  onChange={onChange}
                />
              </div>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Last Name</span>
                  {errors.lastName && <span className="label-text-alt text-red-600">required field</span>}
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Type here"
                  className="input input-bordered input-success w-full max-w-lg"
                  value={contestant.lastName}
                  onChange={onChange}
                />
              </div>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Email</span>
                  {errors.email && <span className="label-text-alt text-red-600">required field</span>}
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Type here"
                  className="input input-bordered input-success w-full max-w-lg"
                  value={contestant.email}
                  onChange={onChange}
                />
              </div>
              <div className="form-control w-full max-w-lg">
                <label className="label">
                  <span className="label-text">Class</span>
                </label>
                <input
                  type="text"
                  name="studentClass"
                  placeholder="Type here"
                  className="input input-bordered input-success w-full max-w-lg"
                  value={contestant.studentClass}
                  onChange={onChange}
                />
              </div>

              <div className="modal-action flex justify-center">
                <button className="btn btn-primary btn-wide" onClick={onEnterExam}>ENTER</button>
                <label htmlFor="key-modal" className="btn btn-secondary  text-white">
                  DISMISS
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default connect(null, { accessExam, createContestant })(HomePage);
