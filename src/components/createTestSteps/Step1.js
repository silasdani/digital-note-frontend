import React from 'react'
import {
  EXAM_QUESTION_TYPES,
  EXAM_SECURITY_TYPES,
} from '../../helpers/enums';
import { connect } from 'react-redux';

const Step1 = () => {
  return (
    <div className="Student Information">
      <div className="mockup-window bg-primary shadow-md">
        <div className="px-4 border-t border-base-300 bg-white min-h-[50vh]">
          <h2>Student Information</h2>
          <p>Pick what information your students have to provide before starting the exam</p>
          <div className="flex flex-col w-1/5">
            <div className="form-control">
              <label className="label cursor-pointer">
                <label className="label-text"> First Name</label>
                <input type="checkbox" className="toggle toggle-primary" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <label className="label-text"> Last Name</label>
                <input type="checkbox" className="toggle toggle-primary" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <label className="label-text"> Email</label>
                <input type="checkbox" className="toggle toggle-primary" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <label className="label-text"> Class</label>
                <input type="checkbox" className="toggle toggle-primary" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <label className="label-text"> Teacher Name</label>
                <input type="checkbox" className="toggle toggle-primary" />
              </label>
            </div>
          </div>
          <div className="text-lg py-2">Anonymize the Exam</div>
          <p className="py-2">Student information is replaced by a unique code and the teacher can identify students after making the exam.</p>
          <input type="checkbox" className="toggle toggle-primary" />

          <div className="underline transition duration-150 ease-in-out" >
            <p data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">How does this work?</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { create } = state.exam;

  return {
    create
  }
}

export default connect(mapStateToProps)(Step1)