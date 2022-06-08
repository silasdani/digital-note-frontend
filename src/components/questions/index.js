import React from 'react'
import Question from './Question';
import { Divider } from '@material-ui/core';

const Questions = ({ viewMode, examen, updateQuestionFields, ...props }) => {
  const { questions } = examen;

  const removeQuestion = (index) => {
  }

  const addNewQuestion = (templateQuestion) => {
    if (templateQuestion) {
      props.addNewQuestion(templateQuestion);
      return;
    }

    props.addNewQuestion({ ...questions[questions.length - 1], file: null, no: questions.length });
  }

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
          onClick={() => addNewQuestion({ no: questions.length })}
        >New Question</button>
        <button
          className="btn btn-accent ml-10"
          onClick={addNewQuestion}
        >Paste Last Question</button>
      </>}
    </div>
  )
}

export default Questions