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
        </div>
      </div>
    </div>
  )
}

export default ExamListPage