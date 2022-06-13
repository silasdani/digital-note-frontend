import React from 'react';
import { connect } from 'react-redux';
import { Step0, Step1, Step2 } from './createTestSteps';
import { updateExamen, addNewQuestionAt, updateQuestionFields, updateExamFields, removeQuestion } from '../redux/ducks/examDuck';

const CreateTest = ({ ...props }) => {

  const handleClick = () => {
    if (props.examen.id) props.updateExamen(props.examen.id, props.examen)
      .then(() => {
        props.navigate('exam_list')
      })
  }

  return (
    <div className="flex flex-col space-y-5 mb-10">
      <Step0 {...props} />
      <Step1 {...props} />
      <Step2 {...props} />
      <div className="flex justify-center w-full">
        <button className="btn w-56" onClick={handleClick}>Update</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { create } = state.exam;

  return {
    examen: create
  }
}

export default connect(mapStateToProps, {
  updateExamen,
  addNewQuestionAt,
  updateQuestionFields,
  updateExamFields,
  removeQuestion
})(CreateTest)