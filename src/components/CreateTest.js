import React, { useState } from 'react'

const CreateTest = ({ page, setPage }) => {
  const [anonym, setAnonym] = useState(true);

  return (
    <>
      {page == 1 && <div className="Exam name">
        <div className="head h-12 flex flex-row items-center justify-center bg-blue-900 text-white rounded-t-md">Exam Name</div>
        <div className="bg-white py-6 shadow-md text-center">
          <input type="text" placeholder="Exam Name" class="input input-bordered input-primary w-full max-w-xs"></input>
        </div>
      </div>}
      {page == 1 && <div className="Student Information mt-6">
        <div className="head h-12 flex flex-row items-center justify-center bg-blue-900 text-white rounded-t-md">Student Information</div>
        <div className="bg-white px-20 py-10 shadow-md">
          <h2>Student Information</h2>
          <p>Pick what information your students have to provide before starting the exam</p>
          <div className="flex flex-col w-1/5">
            <div className="form-control">
              <label className="label cursor-pointer">
                <label className="label-text"> First Name</label>
                <input type="checkbox" class="toggle toggle-primary" checked />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <label className="label-text"> Last Name</label>
                <input type="checkbox" class="toggle toggle-primary" checked />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <label className="label-text"> Email</label>
                <input type="checkbox" class="toggle toggle-primary" checked />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <label className="label-text"> Class</label>
                <input type="checkbox" class="toggle toggle-primary" checked />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <label className="label-text"> Teacher Name</label>
                <input type="checkbox" class="toggle toggle-primary" checked />
              </label>
            </div>
          </div>
          <div className="text-lg py-2">Anonymize the Exam</div>
          <p className="py-2">Student information is replaced by a unique code and the teacher can identify students after making the exam.</p>
          <input type="checkbox" class="toggle toggle-primary" checked />

          <div className="underline transition duration-150 ease-in-out" >
            <p data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">How does this work?</p>
          </div>
        </div>
      </div>}

      {page == 2 && <div className="Student Workspace">
        <div className="head h-12 flex flex-row items-center justify-center bg-blue-900 text-white rounded-t-md">Student Workspace</div>
        <div className="bg-white px-20 py-10 shadow-md">
          <div className="text-lg py-2">Writing area</div>
          <p className="py-2">Student information is replaced by a unique code and the teacher can identify students after making the exam.</p>
          <Switch
            checked={anonym}
            className={undefined}
            disabled={false}
            handleColor="white"
            name={undefined}
            offColor="red"
            onChange={() => { setAnonym(!anonym); }}
            onColor="green"
            pendingOffColor={undefined}
            pendingOnColor={undefined}
            readOnly={undefined}
            style={undefined}
          />
          <div className="italic text-sm">The student is given an area to write answers in</div>
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