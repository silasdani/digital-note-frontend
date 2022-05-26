import React, { useRef } from 'react';
import { QUESTION_TYPES } from '../../helpers/enums';
import { isImage, isPdf } from '../../helpers/media';
import { connect } from 'react-redux';
import { updateQuestionFields } from '../../redux/ducks/examDuck';
import PdfViewerComponent from '../../components/PDFViewerComponent';

const Question = ({ questionType, textStatement, options, no, required, description, file, index, ...props }) => {
  const questionFileRef = useRef(null);

  const onFileChange = (event) => {
    const file = event.currentTarget.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      props.updateQuestionFields(index, 'file', reader.result)
    });

    reader.readAsDataURL(file);
  }

  return (
    <div className="py-5">
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-5 lg:justify-between">
        <textarea
          className="textarea textarea-accent w-full lg:w-[62%] mt-5 lg:mt-0"
          placeholder={`${no + 1}. Question Statement`}
          value={textStatement}
          onChange={(ev) => props.updateQuestionFields(index, 'textStatement', ev.target.value)}
        ></textarea>
        <div className="flex flex-row space-x-5 justify-between items-center lg:items-end lg:flex-col lg:space-y-2 lg:space-x-0 min-w-[20vw] lg:w-[38%]">
          <select
            className="select select-accent lg:w-full"
            value={questionType}
            onChange={(ev) => props.updateQuestionFields(index, 'questionType', Number(ev.target.value))}
          >
            <option disabled></option>
            {QUESTION_TYPES.map(({ name, value }, index) =>
              (<option key={index} value={value}>{name}</option>))
            }
          </select>
          <div className="flex space-x-5">
            <div className="flex items-center">
              <label className="label label-text">Required:</label>
              <input
                type="checkbox"
                className="toggle toggle-primary"
                checked={required}
                onClick={() => props.updateQuestionFields(index, 'required', !required)}
              />
            </div>
            <button
              className="btn btn-outline"
              onClick={() => questionFileRef.current?.click()}
            >+ ADD FILE</button>
            <input type="file" name="file" className="hidden" ref={questionFileRef} onChange={onFileChange} />
          </div>
        </div>
      </div>
      <div className="justify-center">
        {file &&
          <div className="flex flex-col items-center">
            {isImage(file) && <img className="my-5 rounded-xl" src={file} alt="some image" />}
            {isPdf(file) &&
              <div className="PDF-viewer my-5 rounded-xl">
                <PdfViewerComponent document={file} />
              </div>
            }
            <button className="badge badge-ghost" onClick={() => { props.updateQuestionFields(index, 'file', null) }}>Remove File</button>
          </div>
        }
      </div>
      <div className="question-content">
        {questionType == 0 && <div className="py-10 bg-accent">
          Simple text question
        </div>
        }
        {questionType == 1 && <div>
          Choose option question
        </div>
        }
        {questionType == 2 && <div>
          Upload file question
        </div>
        }
        {questionType == 3 && <div>
          Select answer question
        </div>
        }
      </div>
    </div>
  )
}

export default connect(null, { updateQuestionFields })(Question)