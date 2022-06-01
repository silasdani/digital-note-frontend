import React from 'react'
import Question from './Question';
import { Divider } from '@material-ui/core';

const Questions = ({ viewMode, examen, updateQuestionFields, ...props }) => {
  const { questions } = examen;

  return (
    <div className="">
      {questions?.map((question, index) => {
        return (
          <div className="question" key={index}>
            <Divider />
            {<Question {...question} index={index} updateQuestionFields={updateQuestionFields} viewMode={viewMode} />}
          </div>
        )
      })}
      {!viewMode && <>
        <button
          className="btn btn-primary"
          onClick={() => props.addNewQuestion({ no: questions.length })}
        >New Question</button>
        <button
          className="btn btn-accent ml-10"
          onClick={() => props.addNewQuestion({ ...questions[questions.length - 1], file: null, no: questions.length })}
        >Paste Last Question</button>
      </>}
    </div>
  )
}

export default Questions