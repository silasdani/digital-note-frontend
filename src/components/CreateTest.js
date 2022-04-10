import React, { useState } from 'react'
import Switch from 'react-ios-switch';

const CreateTest = () => {
  const [anonym, setAnonym] = useState(true);

  return (
    <div className="">
      CreateTest
      <div className="Student Information">
        <div className="head h-12 flex flex-row items-center justify-center bg-blue-900 text-white rounded-t-md">Student Information</div>
        <div className="bg-white px-20 py-10 shadow-md">
          <h2>Student Information</h2>
          <p>Tick what information your students have to provide before starting the exam</p>
          <div className="flex flex-col py-10">
            <div className="row">
              <input type="checkbox" className="" />
              <span className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                First Name
              </span>
            </div>
            <div className="row">
              <input type="checkbox" className="" />
              <span className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                Last Name
              </span>
            </div>
            <div className="row">
              <input type="checkbox" className="" />
              <span className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                Email
              </span>
            </div>
            <div className="row">
              <input type="checkbox" className="" />
              <span className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                Class
              </span>
            </div>
            <div className="row">
              <input type="checkbox" className="" />
              <span className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                Teacher Name
              </span>
            </div>
          </div>
          <div className="text-lg py-2">Anonymize the Exam</div>
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
          <div className="underline transition duration-150 ease-in-out" >
            <p data-bs-toggle="tooltip" data-bs-placement="right" title="Tooltip on right">How does this work?</p>
          </div>
        </div>
      </div>

      <div className="Student Workspace">
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
      </div>

      <div className="Security">
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
      </div>
    </div>
  )
}

export default CreateTest