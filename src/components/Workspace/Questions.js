import React, { useRef } from 'react';
import { isPdf, isImage } from '../../helpers/media';
import PdfViewerComponent from '../../components/PDFViewerComponent';
import { FaCloudUploadAlt } from "react-icons/fa";
import { connect } from 'react-redux';
import { updateQuestionFields } from '../../redux/ducks/submissionDuck';
import { xor } from 'lodash';

const Questions = (props) => {
  const { navigate } = props;
  const { questionAnswers: submissionQuestions } = props.create;
  const { questions } = props.examen;
  const questionFileRef = useRef();
  const currentQuestion = questions?.find((q) => (q.no === props.tab.index))

  const onPrevQuestion = () => props.onMoveQuestion(-1)
  const onNextQuestion = () => props.onMoveQuestion(1)

  const { required, options, questionType, textStatement, selects, file } = currentQuestion;
  const currentAnswer = submissionQuestions?.find((q) => q.no === currentQuestion.no)

  const onFileChange = (event) => {
    const file = event.currentTarget.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      props.updateQuestionFields(currentAnswer?.no, 'file', reader.result)
    });

    reader.readAsDataURL(file);
  }

  return (

    <div>
      <div className="statement">
        <p className="text-xl">
          {required && <span className="text-error">*</span>}
          Statement:
          <span>{` ${textStatement}`}</span>
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
        {options?.map((option, optionIndex) => (
          <div key={optionIndex} className="flex flex-row items-center space-x-4 my-2 lg:ml-2 form-control w-full max-w-xs">
            <input type='radio' className="radio radio-accent" checked={currentAnswer?.option == option} onChange={() => {
              props.updateQuestionFields(currentAnswer?.no, 'option', option)
            }} />
            <label className='max-w-lg w-full'>{option}</label>
          </div>
        ))}
      </div>
      }

      {questionType == 'text' && <div className="flex flex-col lg:flex-row lg:space-x-6">
        <textarea
          className="textarea textarea-accent w-full mt-5 h-64"
          placeholder="Your answer here"
          value={currentAnswer?.text || ''}
          onChange={(ev) => {
            props.updateQuestionFields(currentAnswer?.no, 'text', ev.target.value)
          }}
        ></textarea>
      </div>
      }

      {questionType == 'file' && <div className="flex flex-col items-center my-10 px-10 pb-5 border  border-accent rounded-xl cursor-pointer">
        {!currentAnswer?.file &&
          <>
            <div className="flex flex-col items-center px-10 pb-5 border rounded-xl cursor-pointer" onClick={() => questionFileRef.current?.click()}>
              <FaCloudUploadAlt size={100} />
              <div className="badge badge-ghost">File uploading goes here</div>
            </div>
            <input
              type="file"
              name="file"
              className="hidden"
              accept="application/pdf, image/*"
              ref={questionFileRef}
              onChange={onFileChange} />
          </>
        }
        <div className="file-section justify-center">
          {currentAnswer?.file &&
            <div className="flex flex-col items-center">
              {isImage(currentAnswer?.file) && <img className="my-5 rounded-xl" src={currentAnswer?.file} alt="Image" />}
              {isPdf(currentAnswer?.file) &&
                <div className="PDF-viewer my-5 rounded-xl">
                  <PdfViewerComponent document={currentAnswer?.file} />
                </div>
              }
              {currentAnswer?.file && <button
                className="badge badge-ghost"
                onClick={() => {
                  props.updateQuestionFields(currentAnswer?.no, 'file', null)
                }}
              >
                Remove File
              </button>}
            </div>
          }
        </div>
      </div>
      }

      {questionType == 'choose' && <div className="flex flex-col lg:flex-row lg:space-x-6">
        {selects?.map((select, selectIndex) => (
          <div key={selectIndex} className="flex flex-row items-center space-x-4 my-2 lg:ml-2 form-control w-full max-w-xs">
            <input type='checkbox' className="checkbox checkbox-accent" checked={currentAnswer?.selects?.includes(select)} onChange={() => {
              props.updateQuestionFields(currentAnswer?.no, 'selects', xor(currentAnswer?.selects, [select]))
            }} />
            <label className='max-w-lg w-full'>{select}</label>
          </div>
        ))}
      </div>
      }

      <div className="my-10 mx-auto w-56 btn-group grid grid-cols-2">
        {questions[0].no < currentQuestion.no ? <button className="btn btn-outline" onClick={onPrevQuestion}>Previous</button> : <div />}
        {questions[questions.length - 1].no > currentQuestion.no && <button className="btn btn-outline" onClick={onNextQuestion}>Next</button>}
        {questions[questions.length - 1].no == currentQuestion.no && <button className="btn" onClick={props.onNextTab}>Next</button>}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { create } = state.submission;

  return {
    create
  }
}

export default connect(mapStateToProps, { updateQuestionFields })(Questions)