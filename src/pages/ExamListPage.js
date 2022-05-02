import React, { useState } from 'react'
import Switch from 'react-ios-switch';

const ExamListPage = () => {
  const [checked, setCheck] = useState(true)

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute bg-white mt-20 py-20 rounded-lg shadow-xl w-4/5">
        <div className="text-2xl">Exam List Page</div>
        <div className="myExams">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 px-6">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md">
                  <div className="head h-12 flex flex-row items-center justify-center bg-blue-900 text-white rounded-t-md">My Exams</div>
                  <table className="min-w-full rounded-b-md">
                    <thead className="bg-white">
                      <tr>
                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4">
                          # Exam Name (112)
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
      </div>
    </div>
  )
}

export default ExamListPage