import React from 'react'
import Question from './Question';
import { Divider } from '@material-ui/core';

const Questions = ({ viewMode, examen, updateQuestionFields, ...props }) => {
  const { questions, examType } = examen;
  const canDelete = questions.length > 1;

  return (
    <div className="">
      {examType === 'digital' ? questions?.map((question, index) => {
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
              addNewQuestionAt={props.addNewQuestionAt}
            />}
          </div>
        )
      }) : <div>
        There are no questions available for this type of exam.
      </div>
      }
      {!viewMode && examType === 'digital' && <>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => props.addNewQuestionAt(questions[questions.length - 1].no)}
        >New</button>
      </>}
    </div>
  )
}

export default Questions