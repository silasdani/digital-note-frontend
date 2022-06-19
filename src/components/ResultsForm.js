import React from 'react';
import { isPdf, isImage } from '../helpers/media';
import PdfViewerComponent from '../components/PDFViewerComponent';
import { isEmpty } from 'lodash';

const ResultsForm = ({ submission, examen, ...props }) => {
  const { answers } = submission;

  if (isEmpty(examen)) return (<div>
    This submission is not available!
  </div>
  )

  if (examen.examType !== 'digital') return (
    <div>
      {submission.file && <div className="file">
        <div className="flex flex-col items-center">
          {isImage(submission.file) && <img className="my-5 rounded-xl" src={submission.file} alt="Image" />}
          {isPdf(submission.file) &&
            <div className="PDF-viewer my-5 rounded-xl">
              <PdfViewerComponent document={submission.file} />
            </div>
          }
        </div>
      </div>
      }
    </div >
  ) || <></>

  if (examen.examType === 'digital') return answers?.map((answer, index) => {
    const { option, text, selects, file, no } = answer;
    const question = examen.questions[index];

    if (question) return (
      <div key={index} className="mt-5">
        <div className="statement flex flex-col-reverse lg:flex-row lg:space-x-5 lg:justify-between">
          <p className="">
            {question.required && <span className="text-error">*</span>}
            {index + 1}:
            <span>{` ${question.textStatement}`}</span>
            {/* <span className="text-success">(100 pts)</span> */}
          </p>
        </div>

        {question.file && <div className="file">
          <div className="flex flex-col items-center">
            {isImage(question.file) && <img className="my-5 rounded-xl" src={question.file} alt="Image" />}
            {isPdf(question.file) &&
              <div className="PDF-viewer my-5 rounded-xl">
                <PdfViewerComponent document={question.file} />
              </div>
            }
          </div>
        </div>}

        {question.questionType == 'option' && <div className="flex flex-col lg:flex-row lg:space-x-6">
          {question.options?.map((op, optionIndex) => (
            <div key={optionIndex} className="flex flex-row items-center space-x-4 my-2 lg:ml-2 form-control w-full max-w-xs">
              <input
                disabled
                type='radio'
                className="radio radio-accent"
                checked={option == op}
                onChange={() => { }} />
              <label className={`max-w-lg w-full ${option == op ? "bg-success" : ""}`}>{op}</label>
            </div>
          ))}
        </div>
        }

        {question.questionType == 'text' && <div className="flex flex-col lg:flex-row lg:space-x-6">
          <p
            className=" mt-5"
          >{text}</p>
        </div>
        }

        {question.questionType === 'file' && <div className="flex flex-col items-center my-10 px-10 pb-5 border  border-accent rounded-xl cursor-pointer">
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
            {!file && <p>There is no file uploaded!</p>}
          </div>
        </div>
        }

        {question.questionType == 'choose' && <div className="flex flex-col lg:flex-row lg:space-x-6">
          {question.selects?.map((select, selectIndex) => (
            <div key={selectIndex} className="flex flex-row items-center space-x-4 my-2 lg:ml-2 form-control">
              <input
                type='checkbox'
                disabled
                className={`max-w-lg ${selects?.includes(select) ? "bg-success" : ""} checkbox checkbox-accent`}
                checked={selects?.includes(select)}
                onChange={() => { }}
              />
              <label className=''>{select}</label>
            </div>
          ))}
        </div>
        }
      </div>
    ) || <></>
  }) || <></>

  return <></>

}

export default ResultsForm