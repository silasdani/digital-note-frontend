import React, { useState } from 'react'

const ExamListPage = () => {
  const [checked, setCheck] = useState(true)

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute w-4/5">
        <h1 className="absolute mt-6 text-3xl font-bold text-white text-left">Exam List</h1>
        <div className="bg-white mt-20 rounded-lg shadow-xl w-full">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="text-white">
                <tr>
                  <th className="bg-blue-900"></th>
                  <th className="bg-blue-900">Name</th>
                  <th className="bg-blue-900">Job</th>
                  <th className="bg-blue-900">Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover cursor-pointer">
                  <th>1</th>
                  <td>Cy</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <tr className="hover cursor-pointer">
                  <th>2</th>
                  <td>Hart</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <tr className="hover cursor-pointer">
                  <th>3</th>
                  <td>Brice</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-white mt-10 rounded-lg shadow-xl w-full">
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead className="text-white">
                <tr>
                  <th className="bg-blue-900"></th>
                  <th className="bg-blue-900">Name</th>
                  <th className="bg-blue-900">Job</th>
                  <th className="bg-blue-900">Favorite Color</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover cursor-pointer">
                  <th>1</th>
                  <td>Cy</td>
                  <td>Quality Control Specialist</td>
                  <td>Blue</td>
                </tr>
                <tr className="hover cursor-pointer">
                  <th>2</th>
                  <td>Hart</td>
                  <td>Desktop Support Technician</td>
                  <td>Purple</td>
                </tr>
                <tr className="hover cursor-pointer">
                  <th>3</th>
                  <td>Brice</td>
                  <td>Tax Accountant</td>
                  <td>Red</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className="myExams">
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
                          Meow
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
                          <input type="checkbox" class="toggle toggle-primary" checked />
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
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default ExamListPage