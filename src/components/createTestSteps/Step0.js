import React, { useState, useRef } from 'react'
import {
  EXAM_QUESTION_TYPES,
  EXAM_SECURITY_TYPES,
} from '../../helpers/enums';
import { connect } from 'react-redux';
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";
const Step0 = () => {
  const [type, setType] = useState(0);
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const fileRef = useRef(null);

  const onFileChange = (event) => {
    const file = event.currentTarget.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setFile(reader.result)
      setFileName(event.target.value)
    });

    reader.readAsDataURL(file);
  }

  console.warn(file)

  return (
    <div className="Exam questions">
      <div className="mockup-window bg-primary shadow-md">
        <div className="flex-col px-10 border-t border-base-300 bg-white min-h-[50vh] p-6 space-y-4">
          <div className="form-control flex-row justify-center space-x-10">
            <input type="text" placeholder="Exam Name" className="input input-bordered input-accent min-w-[20vw] max-w-xs"></input>
            <div className="dropdown">
              <select className="select select-accent min-w-[20vw] max-w-xs" value={type} onChange={(ev) => setType(ev.target.value)}>
                <option disabled></option>
                {EXAM_QUESTION_TYPES.map(({ name, value }, index) => (<option key={index} value={value}>{name}</option>))}
              </select>
            </div>
          </div>
          {type == 0 &&
            <div className="flex justify-center text-center">
              <div className="justify-center">
                {!file &&
                  <div className="">
                    <FaCloudUploadAlt
                      size={100}
                      className="cursor-pointer"
                      onClick={() => { fileRef.current?.click() }}
                    >
                    </FaCloudUploadAlt>
                    <input type="file" name="file" className="hidden" ref={fileRef} accept="application/pdf" onChange={onFileChange} />
                    <button className="badge badge-ghost" onClick={() => { fileRef.current?.click() }}>Upload File</button>
                  </div>
                }
                {file &&
                  <div className="p-2 rounded">
                    <div className="flex justify-center">
                      <FaFilePdf
                        size={50}
                        className="cursor-pointer"
                        onClick={() => { fileRef.current?.click() }}
                      >
                      </FaFilePdf>
                    </div>
                    <p>{fileName}</p>
                    <button className="badge badge-ghost" onClick={() => { setFile(null) }}>Remove File</button>
                  </div>
                }
              </div>
            </div>
          }
          {type == 1 &&
            <div className="">
              I NEED A FILE
            </div>
          }
          {type == 2 &&
            <div className="">
              I NEED DIGITAL QUESTIONS
            </div>
          }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { create } = state.exam;

  return {
    create
  }
}

export default connect(mapStateToProps)(Step0)