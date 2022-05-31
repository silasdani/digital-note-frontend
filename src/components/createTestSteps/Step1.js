import React, { useState } from 'react'
import {
  EXAM_QUESTION_TYPES,
  EXAM_SECURITY_TYPES,
} from '../../helpers/enums';
import { connect } from 'react-redux';
import Questions from '../questions';

const Step1 = ({ create, ...props }) => {
  return (
    <div className="Student Information">
      <div className="mockup-window bg-primary shadow-md">
        <div className="flex-col px-10 border-t border-base-300 bg-white min-h-[50vh] p-6 space-y-4">
          {create.type < 2 &&
            <div className="">
              <div className="h2">
                No digital questions for this type of exam.
                Questions should be found on the pdf file
              </div>
            </div>
          }
          {create.type == 2 &&
            <div className="quiz">
              <Questions />
            </div>
          }
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