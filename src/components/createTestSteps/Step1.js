import React from 'react'
import Questions from '../questions';

const Step1 = ({ examen, ...props }) => {
  return (
    <div className="Student Information">
      <div className="mockup-window bg-primary shadow-md">
        <div className="flex-col px-10 border-t border-base-300 bg-white min-h-[50vh] p-6 space-y-4">
          {examen.questions?.length == 0 &&
            <div className="h2">
              No digital questions for this exam.
              Questions should be found on the pdf file
            </div>
          }
          <div className="quiz">
            <Questions examen={examen} {...props} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Step1