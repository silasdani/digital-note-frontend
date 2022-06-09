import React from 'react'
import Question from './Question';
import { Divider } from '@material-ui/core';

const Questions = ({ viewMode, examen, updateQuestionFields, ...props }) => {
  const { questions } = examen;

  const addNewQuestion = (templateQuestion) => {
    if (templateQuestion) {
      props.addNewQuestion(templateQuestion);
      return;
    }

    props.addNewQuestion({ ...questions[questions.length - 1], file: null, no: questions.length });
  }

  const canDelete = questions.length > 1;

  return (
    <div className="">
      {questions?.map((question, index) => {
        return (
          <div className="question" key={index}>
            <Divider />
            {<Question
              {...question}
              index={index}
              updateQuestionFields={updateQuestionFields}
              viewMode={viewMode}
              canDelete={canDelete}
              removeQuestion={props.removeQuestion}
            />}
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