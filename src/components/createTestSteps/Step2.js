import React from 'react'
import {
  EXAM_QUESTION_TYPES,
  EXAM_SECURITY_TYPES,
} from '../../helpers/enums';
import { connect } from 'react-redux';

const Step2 = () => {
  return (
    <div className="Student Workspace">
      <div className="mockup-window bg-primary shadow-md text-center">
        <div className="px-4 border-t border-base-300 bg-white min-h-[50vh]">
          <div className="text-lg py-2">Writing area</div>
          <p className="py-2">Student information is replaced by a unique code and the teacher can identify students after making the exam.</p>
          <input type="checkbox" className="toggle toggle-primary" />
          <div className="italic text-sm">The student is given an area to write answers in</div>
        </div>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {
  const { create } = state.exam;

  return {
    create
  }
}

export default connect(mapStateToProps)(Step2)