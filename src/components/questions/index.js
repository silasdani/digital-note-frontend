import React from 'react'
import { connect } from 'react-redux'
import { addNewQuestion, updateExamFields } from '../../redux/ducks/examDuck';
import Question from './Question';
import { Divider } from '@material-ui/core';

const Questions = ({ questions, create, updateExamFields, ...props }) => {
  return (
    <div className="">
      {questions.map((question, index) => {
        return (
          <div className="question" key={index}>
            <Divider />
            {<Question {...question} index={index} />}
          </div>
        )
      })}
      <button
        className="btn btn-primary"
        onClick={() => props.addNewQuestion({ no: questions.length })}
      >new question</button>
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

export default connect(mapStateToProps, { updateExamFields, addNewQuestion })(Questions)