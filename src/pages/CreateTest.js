import React, { useState } from 'react'
import Switch from 'react-ios-switch';


const CreateTest = () => {
  const [checked, setCheck] = useState(true)

  return (
    <div className="">
      CreateTest
      <div className="myExams">
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow-md">
                <div className="head h-12 flex flex-row items-center justify-center bg-blue-900 text-white rounded-t-md">My Exams</div>
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                        # Exam Name
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                        Exam key
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                        Created
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                        Status
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                        Handle
                      </th>
                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                        Open for new students
                      </th>
                      <th>[ √ ]</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1 NATO</td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        ASGDFJDS
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        20-12-2020
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        √
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        Handle
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <Switch
                          checked={checked}
                          className={undefined}
                          disabled={false}
                          handleColor="white"
                          name={undefined}
                          offColor="red"
                          onChange={() => { setCheck(!checked); }}
                          onColor="green"
                          pendingOffColor={undefined}
                          pendingOnColor={undefined}
                          readOnly={undefined}
                          style={undefined}
                        />
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        ;
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="myExams">
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
      {['class_8', 'class_9', 'class_10'].map((cls) => {

        return (
          <div className="class" key={Math.random()}>
            <button type="button" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal">
              Launch demo modal
            </button>

            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
              id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog relative w-auto pointer-events-none">
                <div
                  className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                  <div
                    className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5>
                    <button type="button"
                      className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                      data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body relative p-4">
                    Modal body text goes here.
                  </div>
                  <div
                    className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" className="px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Save changes</button>
                  </div>
                </div>
              </div>

            </div>


          </div>
        )
      })}
    </div>
  )
}

export default CreateTest