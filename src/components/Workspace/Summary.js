import React, { useRef } from 'react'
import { connect } from 'react-redux';
import { createSubmission, updateSubmissionFields } from '../../redux/ducks/submissionDuck';
import { isPdf, isImage } from '../../helpers/media';
import PdfViewerComponent from '../../components/PDFViewerComponent';
import { FaCloudUploadAlt } from "react-icons/fa";

const Summary = ({ examen, submission, ...props }) => {
  const { examType } = examen;
  const everyThingIsOk = () => (true)
  const fileRef = useRef();

  const onSubmit = () => {
    if (everyThingIsOk()) {
      props.createSubmission(submission)
    }
  }

  const onFileChange = (event) => {
    const file = event.currentTarget.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      props.updateSubmissionFields('file', reader.result)
    });

    reader.readAsDataURL(file);
  }

  return (
    <div>
      {examType !== 'digital' && <div className="flex flex-col items-center my-10 px-10 pb-5 border  border-accent rounded-xl cursor-pointer">
        {!submission?.file &&
          <>
            <div className="flex flex-col items-center px-10 pb-5 border rounded-xl cursor-pointer" onClick={() => fileRef.current?.click()}>
              <FaCloudUploadAlt size={100} />
              <div className="badge badge-ghost">Upload your file here</div>
            </div>
            <input
              type="file"
              name="file"
              className="hidden"
              accept="application/pdf, image/*"
              ref={fileRef}
              onChange={onFileChange} />
          </>
        }
        <div className="file-section justify-center">
          {submission?.file &&
            <div className="flex flex-col items-center">
              {isImage(submission?.file) && <img className="my-5 rounded-xl" src={submission?.file} alt="Image" />}
              {isPdf(submission?.file) &&
                <div className="PDF-viewer my-5 rounded-xl">
                  <PdfViewerComponent document={submission?.file} />
                </div>
              }
              {submission?.file && <div className="flex flex-row items-center justify-between w-64">
                <button
                  className="btn btn-secondary text-white"
                  onClick={() => {
                    props.updateSubmissionFields('file', null)
                  }}
                >
                  Remove File
                </button>
                <button
                  className="btn btn-primary "
                  onClick={onSubmit}
                >
                  Submit
                </button>
              </div>
              }
            </div>
          }
        </div>
      </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  const { create: submission } = state.submission;

  return {
    submission
  }
}

export default connect(mapStateToProps, { createSubmission, updateSubmissionFields })(Summary)