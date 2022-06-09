import React from 'react';
import { connect } from 'react-redux';
import { Step0, Step1, Step2 } from './createTestSteps'

const ShowTest = ({ page, setPage, ...props }) => {

  return (
    <div className="flex flex-col space-y-5 disabled" disabled>
      <Step0 {...props} />
      <Step1 {...props} />
      <Step2 {...props} />
    </div>
  )
}

const mapStateToProps = (state) => {

  return {
    addNewQuestion: () => { },
    updateQuestionFields: () => { },
    updateExamFields: () => { },
    removeQuestion: () => { },
    viewMode: true
  }
}

export default connect(mapStateToProps)(ShowTest)