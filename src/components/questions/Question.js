import React from 'react';
import { QUESTION_TYPES } from '../../helpers/enums';
import { connect } from 'react-redux';
import { updateQuestionFields } from '../../redux/ducks/examDuck';

const Question = ({ questionType, textStatement, options, no, required, description, index, ...props }) => {
  return (
    <div className="py-5">
      <div className="flex flex-row justify-between space-x-5">
        <input
          className="textarea textarea-accent w-full min-w-[40vw]"
          placeholder="Question Statement"
          value={textStatement}
          onChange={(ev) => props.updateQuestionFields(index, 'textStatement', ev.target.value)}
        ></input>
        <select
          className="select select-accent min-w-[20vw] max-w-xs"
          value={questionType}
          onChange={(ev) => props.updateQuestionFields(index, 'questionType', Number(ev.target.value))}
        >
          <option disabled></option>
          {QUESTION_TYPES.map(({ name, value }, index) =>
            (<option key={index} value={value}>{name}</option>))
          }
        </select>
      </div>
      <div className="question-content">
        {questionType == 'text' && <div>
          Simple text question
        </div>
        }
        {questionType == 'option' && <div>
          Choose option question
        </div>
        }
        {questionType == 'file' && <div>
          Upload file question
        </div>
        }
        {questionType == 'select' && <div>
          Select answer question
        </div>
        }
      </div>
    </div>
  )
}

export default connect(null, { updateQuestionFields })(Question)