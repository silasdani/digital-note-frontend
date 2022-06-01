import React from 'react'
import { connect } from 'react-redux'
import Question from './Question';
import { Divider } from '@material-ui/core';

const Questions = ({ questions, create, updateQuestionFields, ...props }) => {
  return (
    <div className="">
      {questions.map((question, index) => {
        return (
          <div className="question" key={index}>
            <Divider />
            {<Question {...question} index={index} updateQuestionFields={updateQuestionFields} />}
          </div>
        )
      })}
      <button
        className="btn btn-primary"
        onClick={() => props.addNewQuestion({ no: questions.length })}
      >New Question</button>
      <button
        className="btn btn-accent ml-10"
        onClick={() => props.addNewQuestion({ ...questions[questions.length - 1], file: null, no: questions.length })}
      >Paste Last Question</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { create } = state.exam;
  const { questions } = create;

  return {
    create,
    questions
  }
}

export default connect(mapStateToProps)(Questions)