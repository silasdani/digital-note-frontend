import React, { useRef } from 'react';
import { QUESTION_TYPES } from '../../helpers/enums';
import { isImage, isPdf } from '../../helpers/media';
import { connect } from 'react-redux';
import { updateQuestionFields } from '../../redux/ducks/examDuck';
import PdfViewerComponent from '../../components/PDFViewerComponent';
import { FaCloudUploadAlt } from "react-icons/fa";

const Question = ({ questionType, textStatement, options, no, required, description, file, index, selects, ...props }) => {
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
    <div key={index} className="py-5">
      <div className="flex flex-col-reverse lg:flex-row lg:space-x-5 lg:justify-between">
        <textarea
          className="textarea textarea-accent w-full lg:w-[62%] mt-5 lg:mt-0"
          placeholder={`${no + 1}. Question Statement`}
          value={textStatement}
          onChange={(ev) => props.updateQuestionFields(index, 'textStatement', ev.target.value)}
        ></textarea>
        <div className="flex flex-row space-x-5 justify-between items-center min-w-[20vw] lg:items-end lg:flex-col lg:space-y-2 lg:space-x-0  lg:w-[38%]">
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
                onChange={() => props.updateQuestionFields(index, 'required', !required)}
              />
            </div>
            <button
              className="btn btn-outline"
              onClick={() => questionFileRef.current?.click()}
            >
              + ADD FILE
            </button>
            <input
              type="file"
              name="file"
              className="hidden"
              ref={questionFileRef}
              onChange={onFileChange} />
          </div>
        </div>
      </div>
      <div className="file-section justify-center">
        {file &&
          <div className="flex flex-col items-center">
            {isImage(file) && <img className="my-5 rounded-xl" src={file} alt="Image" />}
            {isPdf(file) &&
              <div className="PDF-viewer my-5 rounded-xl">
                <PdfViewerComponent document={file} />
              </div>
            }
            <button
              className="badge badge-ghost"
              onClick={() => { props.updateQuestionFields(index, 'file', null) }}
            >
              Remove File
            </button>
          </div>
        }
      </div>
      <div className="question-content-section py-2">
        {questionType == 0 && <div className="">
          <div>
            <input type="text" className="input input-bordered input-accent" placeholder="Text answer goes here" />
          </div>
        </div>
        }
        {questionType == 1 && <div className="flex flex-col lg:flex-row lg:space-x-6">
          {options.map((option, optionIndex) => (
            <div key={optionIndex} className="flex flex-row items-center space-x-4 my-2 lg:ml-2">
              <input type='radio' className="radio radio-accent" checked onChange={() => { }} />
              <div className="indicator">
                <span className="indicator-item badge px-0 badge-secondary">
                  <button onClick={() => props.updateQuestionFields(index, 'options', options.filter((_, i) => i != optionIndex))}>
                    <svg className="w-5 h-3" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16 10c0 .553-.048 1-.601 1H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H15.4c.552 0 .6.447.6 1z" /></svg>
                  </button>
                </span>
                <input
                  type="text"
                  className='input input-bordered h-10 w-full'
                  value={option}
                  onChange={(ev) => props.updateQuestionFields(
                    index,
                    'options',
                    options.reduce((res, option, index) =>
                      res.concat(index == optionIndex ? ev.target.value : option),
                      []))
                  } />
              </div>
            </div>
          ))}
          <button onClick={() => props.updateQuestionFields(index, 'options', [...options, 'new'])} >
            <svg className="rounded-full bg-accent h-8 w-8" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" /></svg>
          </button>
        </div>
        }
        {questionType == 2 && <div className="flex flex-col items-center px-10 pb-5 border rounded-xl cursor-pointer">
          <div className="">
            <FaCloudUploadAlt size={100} />
          </div>
          <div className="badge badge-ghost">File uploading goes here</div>
        </div>
        }
        {questionType == 3 && <div className="flex flex-col lg:flex-row lg:space-x-6">
          {selects.map((select, selectIndex) => (
            <div key={selectIndex} className="flex flex-row items-center space-x-4 my-2 lg:ml-2">
              <input type='checkbox' className="checkbox checkbox-accent" />
              <div className="indicator">
                <span className="indicator-item badge px-0 badge-secondary">
                  <button onClick={() => props.updateQuestionFields(index, 'selects', selects.filter((_, i) => i != selectIndex))}>
                    <svg className="w-5 h-3" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16 10c0 .553-.048 1-.601 1H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H15.4c.552 0 .6.447.6 1z" /></svg>
                  </button>
                </span>
                <input
                  type="text"
                  className='input input-bordered h-10 w-full'
                  value={select}
                  onChange={(ev) => props.updateQuestionFields(
                    index,
                    'selects',
                    selects.reduce((res, select, index) =>
                      res.concat(index == selectIndex ? ev.target.value : select),
                      []))
                  } />
              </div>
            </div>
          ))}
          <button onClick={() => props.updateQuestionFields(index, 'selects', [...selects, 'new select'])}>
            <svg className="rounded-full bg-accent h-8 w-8" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M16 10c0 .553-.048 1-.601 1H11v4.399c0 .552-.447.601-1 .601-.553 0-1-.049-1-.601V11H4.601C4.049 11 4 10.553 4 10c0-.553.049-1 .601-1H9V4.601C9 4.048 9.447 4 10 4c.553 0 1 .048 1 .601V9h4.399c.553 0 .601.447.601 1z" /></svg>
          </button>
        </div>
        }
      </div>
    </div >
  )
}

export default connect(null, { updateQuestionFields })(Question)