import React, { useState } from 'react';
import {
  EXAM_QUESTION_TYPES,
  SECURITY_TYPES,
  DEFAULT_EXAM_STATE,
} from '../helpers/enums';

const CreateTest = ({ page, setPage }) => {
  const [exam, setExam] = useState(DEFAULT_EXAM_STATE);

  const onNextPage = () => setPage((page + 1) % 5);
  const onPrevPage = () => setPage(Math.abs(page - 1));

  const onTypeChange = (ev) => {
    setExam({
      ...exam,
      type: ev.target.value,
    })
  }

  return (
    <>

      {page == 0 && <div className="Exam questions">
        <div className="mockup-window bg-primary shadow-md">
          <div className="flex flex-col px-10 border-t border-base-300 bg-white min-h-[50vh] p-6 space-y-4">
            <div className="form-control flex-row items-center space-x-10">
              <div className="text-xl min-w-[10vw]">Exam Name</div>
              <input type="text" placeholder="Exam Name" className="input input-bordered input-primary min-w-[20vw] max-w-xs"></input>
            </div>
            <div className="form-control flex-row items-center space-x-10">
              <div className="text-xl min-w-[10vw]">Exam Questions</div>
              <div className="dropdown">
                <select class="select select-primary min-w-[20vw] max-w-xs" value={exam.type} onChange={onTypeChange}>
                  <option disabled></option>
                  {EXAM_QUESTION_TYPES.map(({ name }) => (<option>{name}</option>))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>}


      {page == 1 && <div className="Student Information">
        <div className="mockup-window bg-primary shadow-md text-center">
          <div className="flex px-4 border-t border-base-300 bg-white min-h-[50vh]">
            <h2>Student Information</h2>
            <p>Pick what information your students have to provide before starting the exam</p>
            <div className="flex flex-col w-1/5">
              <div className="form-control">
                <label className="label cursor-pointer">
                  <label className="label-text"> First Name</label>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <label className="label-text"> Last Name</label>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <label className="label-text"> Email</label>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <label className="label-text"> Class</label>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <label className="label-text"> Teacher Name</label>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
            </div>
            <div className="text-lg py-2">Anonymize the Exam</div>
            <p className="py-2">Student information is replaced by a unique code and the teacher can identify students after making the exam.</p>
            <input type="checkbox" className="toggle toggle-primary" />

            <div className="underline transition duration-150 ease-in-out" >
              <p data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">How does this work?</p>
            </div>
          </div>
        </div>
      </div>}

      {page == 2 && <div className="Student Workspace">
        <div className="mockup-window bg-primary shadow-md text-center">
          <div className="flex px-4 border-t border-base-300 bg-white min-h-[50vh]">
            <div className="text-lg py-2">Writing area</div>
            <p className="py-2">Student information is replaced by a unique code and the teacher can identify students after making the exam.</p>
            <input type="checkbox" className="toggle toggle-primary" />
            <div className="italic text-sm">The student is given an area to write answers in</div>
          </div>
        </div>
      </div>}

      {page == 3 && <div className="Security">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md">
                <div className="head h-12 flex flex-row items-center justify-center bg-blue-900 text-white rounded-t-md">Security</div>

                <table className="min-w-full">
                  <tbody>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><input type="checkbox" className="" /></td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                        Require high security mode.
                      </td>
                    </tr>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><input type="checkbox" className="" /></td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                        Require high security mode.
                      </td>
                    </tr>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><input type="checkbox" className="" /></td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                        Require high security mode.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>}
    </>
  )
}

export default CreateTest