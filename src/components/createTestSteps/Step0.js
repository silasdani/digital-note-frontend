import React, { useRef } from 'react'
import { EXAM_QUESTION_TYPES, EXAM_SECURITY_TYPES } from '../../helpers/enums';
import moment from 'moment';
import { FaCloudUploadAlt } from "react-icons/fa";
import { Divider } from '@material-ui/core';
import { isPdf, isImage } from '../../helpers/media';

const Step0 = ({ examen, ...props }) => {
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
        <div className="absolute text-2xl font-bold text-center text-white h1 -mt-10 w-full">DETAILS</div>
        <div className="px-10 border-t border-base-300 bg-white min-h-[50vh] p-6 space-y-4">
          <div className="form-control flex-row justify-center space-x-10">
            <input
              type="text"
              placeholder="Exam Name"
              className="input input-bordered input-accent min-w-[25vw] max-w-xs"
              onChange={(e) => props.updateExamFields('name', e.target.value)}
              value={examen.name}
            />
            <div className="dropdown">
              <select
                className="select select-accent min-w-[25vw] max-w-xs"
                value={examen.type}
                onChange={(ev) => props.updateExamFields('type', ev.target.value)}
              >
                <option disabled></option>
                {EXAM_QUESTION_TYPES.map(({ name, value }, index) =>
                  (<option key={index} value={value}>{name}</option>))
                }
              </select>
            </div>
          </div>
          <Divider />
          <div className="flex flex-col lg:flex-row items-center lg:justify-center lg:space-x-10">
            <div className="form-control-group flex flex-col">
              <label htmlFor="startTime" className="label label-text">Start Time</label>
              <input
                type='datetime-local'
                placeholder="Start Time"
                className=" input input-bordered input-error min-w-[25vw] max-w-xs"
                onChange={(e) => props.updateExamFields('startTime', e.target.value)}
                value={new Date(examen.startTime).toISOString().slice(0, -8)}
              />
            </div>
            <div className="form-control-group flex flex-col">
              <label htmlFor="endTime" className="label label-text">End Time</label>
              <input
                type='datetime-local'
                placeholder="End Time"
                className="input input-bordered input-error min-w-[25vw] max-w-xs"
                onChange={(e) => props.updateExamFields('endTime', e.target.value)}
                value={new Date(examen.endTime).toISOString().slice(0, -8)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            {!props.viewMode && !examen.file &&
              <div className="">
                <FaCloudUploadAlt
                  size={100}
                  className="cursor-pointer"
                  onClick={() => { fileRef.current?.click() }}
                >
                </FaCloudUploadAlt>
                <input
                  type="file"
                  name="file"
                  className="hidden"
                  ref={fileRef}
                  accept="application/pdf,image/*"
                  onChange={onFileChange} />
                <button className="badge badge-ghost" onClick={() => { fileRef.current?.click() }}>Upload File</button>
              </div>
            }
            {examen.file &&
              <div className="flex flex-col items-center">
                {isImage(examen.file) && <img className="my-5 rounded-xl" src={examen.file} alt="Image" />}
                {isPdf(examen.file) &&
                  <div className="PDF-viewer my-5 rounded-xl">
                    <PdfViewerComponent document={examen.file} />
                  </div>
                }
                {!props.viewMode && <button
                  className="badge badge-ghost"
                  onClick={() => { props.updateExamFields('file', null) }}
                >
                  Remove File
                </button>}
              </div>
            }
          </div>
          <Divider />
          <div className="flex justify-center space-x-10">
            <label className="label label-text">Security Level:</label>
            {EXAM_SECURITY_TYPES.map((security, index) => {
              return (
                <label key={index} className="label cursor-pointer space-x-2">
                  <span className="label-text">{security.name}</span>
                  <input
                    type="radio"
                    className="radio checked:bg-accent"
                    checked={examen.security == security.value}
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

export default Step0