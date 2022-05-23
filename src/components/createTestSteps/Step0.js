import React, { useState } from 'react'
import {
  EXAM_QUESTION_TYPES,
  EXAM_SECURITY_TYPES,
} from '../../helpers/enums';
import { connect } from 'react-redux';


const Step0 = () => {
  const [type, setType] = useState();

  return (
    <div className="Exam questions">
      <div className="mockup-window bg-primary shadow-md">
        <div className="flex-col px-10 border-t border-base-300 bg-white min-h-[50vh] p-6 space-y-4">
          <div className="form-control flex-row items-center space-x-10">
            <div className="text-xl min-w-[10vw]">Exam Name</div>
            <input type="text" placeholder="Exam Name" className="input input-bordered input-accent min-w-[20vw] max-w-xs"></input>
          </div>
          <div className="form-control flex-row items-center space-x-10">
            <div className="text-xl min-w-[10vw]">Exam Questions</div>
            <div className="dropdown">
              <select className="select select-accent min-w-[20vw] max-w-xs" value={type} onChange={setType}>
                <option disabled></option>
                {EXAM_QUESTION_TYPES.map(({ name }, index) => (<option key={index}>{name}</option>))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { exam } = state;

  return {
    exam
  }
}

export default connect(mapStateToProps)(Step0)