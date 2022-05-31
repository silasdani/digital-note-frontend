import React, { useState, useRef } from 'react'
import {
  EXAM_QUESTION_TYPES,
  EXAM_SECURITY_TYPES,
} from '../../helpers/enums';
import { connect } from 'react-redux';
import { FaCloudUploadAlt, FaFilePdf } from "react-icons/fa";
import { updateExamFields } from '../../redux/ducks/examDuck';
import { Divider } from '@material-ui/core';

const Step0 = ({ create, ...props }) => {
  const [fileName, setFileName] = useState('');
  const fileRef = useRef(null);

  const onFileChange = (event) => {
    const file = event.currentTarget.files[0];

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      props.updateExamFields('file', reader.result)
      setFileName(event.target.value)
    });

    reader.readAsDataURL(file);
  }

  return (
    <div className="Exam questions">
      <div className="mockup-window bg-primary shadow-md">
        <div className="flex-col px-10 border-t border-base-300 bg-white min-h-[50vh] p-6 space-y-4">
          <div className="form-control flex-row justify-center space-x-10">
            <input
              type="text"
              placeholder="Exam Name"
              className="input input-bordered input-accent min-w-[25vw] max-w-xs"
              onChange={(e) => props.updateExamFields('name', e.target.value)}
              value={create.name}
            />
            <div className="dropdown">
              {create.type && <select
                className="select select-accent min-w-[25vw] max-w-xs"
                value={create.type}
                onChange={(ev) => props.updateExamFields('type', ev.target.value)}
              >
                <option disabled></option>
                {EXAM_QUESTION_TYPES.map(({ name, value }, index) =>
                  (<option key={index} value={value}>{name}</option>))
                }
              </select>}
            </div>
          </div>
          <Divider />
          <div className="exam-data-container flex flex-row justify-center w-full">
            <div className="flex flex-col space-y-4 w-1/2 items-end mr-10">
              <div className="form-control-group flex flex-col">
                <label htmlFor="startTime" className="label label-text">Start Time</label>
                <input
                  type='datetime-local'
                  placeholder="Start Time"
                  className=" input input-bordered input-error min-w-[25vw] max-w-xs"
                  onChange={(e) => props.updateExamFields('startTime', e.target.value)}
                  value={create.startTime}
                />
              </div>
              <div className="form-control-group flex flex-col">
                <label htmlFor="endTime" className="label label-text">End Time</label>
                <input
                  type='datetime-local'
                  placeholder="End Time"
                  className="input input-bordered input-error min-w-[25vw] max-w-xs"
                  onChange={(e) => props.updateExamFields('endTime', e.target.value)}
                  value={create.endTime}
                />
              </div>
            </div>
            <div className="flex items-center w-1/2">
              {create.type < 2 &&
                <div className="justify-center">
                  {!create.file &&
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
                  {create.file &&
                    <div className="flex flex-col items-center">
                      <FaFilePdf
                        size={50}
                        className="cursor-pointer"
                        onClick={() => { fileRef.current?.click() }}
                      />
                      <p>{fileName}</p>
                      <button className="badge badge-ghost" onClick={() => { props.updateExamFields('file', null) }}>Remove File</button>
                    </div>
                  }
                </div>
              }
            </div>
          </div>
          <Divider />
          <div className="form-control-group flex space-x-10">
            <label className="label label-text">Security Level:</label>
            {EXAM_SECURITY_TYPES.map((security, index) => {
              return (
                <label key={index} className="label cursor-pointer space-x-2">
                  <span className="label-text">{security.name}</span>
                  <input
                    type="radio"
                    className="radio checked:bg-accent"
                    checked={create.security == security.value}
                    onChange={() => props.updateExamFields('security', security.value)} />
                </label>
              )
            })}
          </div>
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

export default connect(mapStateToProps, { updateExamFields })(Step0)