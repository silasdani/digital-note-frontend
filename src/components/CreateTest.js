import React from 'react';
import { connect } from 'react-redux';
import { Step0, Step1, Step2 } from './createTestSteps'
import { createExamen, addNewQuestionAt, updateQuestionFields, updateExamFields, removeQuestion } from '../redux/ducks/examDuck'

const CreateTest = ({ page, setPage, ...props }) => {
  const onNextPage = () => setPage((page + 1) % 4);
  const onPrevPage = () => setPage(page - 1);
  const handleClick = () => {
    props.createExamen(props.examen)
    // .then(() => { props.navigate('exam_list') })
  }

  return (
    <>
      {page == 0 && <Step0 {...props} />}
      {page == 1 && <Step1 {...props} />}
      {page == 2 && <Step2 {...props} />}

      <div className="my-10 mx-auto w-56 btn-group grid grid-cols-2">
        {page > 0 ? <button className="btn btn-outline" onClick={onPrevPage}>Previous</button> : <div />}
        {page < 2 && <button className="btn btn-outline" onClick={onNextPage}>Next</button>}
        {page == 2 && <button className="btn" onClick={handleClick}>Create</button>}
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  const { create } = state.exam;

  return {
    examen: create
  }
}

export default connect(mapStateToProps, {
  createExamen,
  addNewQuestionAt,
  updateQuestionFields,
  updateExamFields,
  removeQuestion
})(CreateTest)