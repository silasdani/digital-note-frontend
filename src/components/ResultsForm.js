import React from 'react';
import { isPdf, isImage } from '../helpers/media';
import PdfViewerComponent from '../components/PDFViewerComponent';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';

const ResultsForm = ({ submission, examen, ...props }) => {
  const { answers } = submission;

  return !isEmpty(examen) && answers?.map((question, index) => {
    const { required, options, questionType, textStatement, selects, file, option } = question;

    return (
      <div key={index}>
        <div className="statement">
          <p className="text-xl">
            {required && <span className="text-error">*</span>}
            Statement:
            <span>{` ${textStatement}`}</span>
            <span className="text-success">(100 pts)</span>
          </p>
        </div>

        {file && <div className="file">
          <div className="flex flex-col items-center">
            {isImage(file) && <img className="my-5 rounded-xl" src={file} alt="Image" />}
            {isPdf(file) &&
              <div className="PDF-viewer my-5 rounded-xl">
                <PdfViewerComponent document={file} />
              </div>
            }
          </div>
        </div>}

        {questionType == 'option' && <div className="flex flex-col lg:flex-row lg:space-x-6">
          {options?.map((op, optionIndex) => (
            <div key={optionIndex} className="flex flex-row items-center space-x-4 my-2 lg:ml-2 form-control w-full max-w-xs">
              <input type='radio' className="radio radio-accent" checked={option == op} onChange={() => { }} />
              <label className={`max-w-lg w-full ${option == op ? "bg-success" : "bg-error"}`}>{option}</label>
            </div>
          ))}
        </div>
        }

        {questionType == 'text' && <div className="flex flex-col lg:flex-row lg:space-x-6">
          <textarea
            className="textarea textarea-accent w-full mt-5 h-64"
            placeholder="Your answer here"
            value={text || ''}
            onChange={(ev) => { }}
          ></textarea>
        </div>
        }

        {questionType == 'file' && <div className="flex flex-col items-center my-10 px-10 pb-5 border  border-accent rounded-xl cursor-pointer">
          <div className="file-section justify-center">
            {file &&
              <div className="flex flex-col items-center">
                {isImage(file) && <img className="my-5 rounded-xl" src={file} alt="Image" />}
                {isPdf(file) &&
                  <div className="PDF-viewer my-5 rounded-xl">
                    <PdfViewerComponent document={file} />
                  </div>
                }
              </div>
            }
          </div>
        </div>
        }

        {questionType == 'choose' && <div className="flex flex-col lg:flex-row lg:space-x-6">
          {selects?.map((select, selectIndex) => (
            <div key={selectIndex} className="flex flex-row items-center space-x-4 my-2 lg:ml-2 form-control w-full max-w-xs">
              <input type='checkbox' className={`max-w-lg w-full ${selects?.includes(select) ? "bg-success" : "bg-error"} checkbox checkbox-accent`} checked={selects?.includes(select)} onChange={() => {
              }} />
              <label className='max-w-lg w-full'>{select}</label>
            </div>
          ))}
        </div>
        }
      </div>
    )
  }) || <div>
      This submission is not available!
    </div>

}

const mapStateToProps = (state, { examId }) => {
  const examen = state.exam.index?.find((ex) => (ex.id == examId)) || {}

  return {
    examen
  }
}

export default connect(mapStateToProps)(ResultsForm)