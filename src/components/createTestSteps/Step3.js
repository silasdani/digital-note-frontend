import React from 'react'
import {
  EXAM_QUESTION_TYPES,
  EXAM_SECURITY_TYPES,
} from '../../helpers/enums';
import { connect } from 'react-redux';

const Step3 = () => {
  return (
    <div className="Security">
      <div className="mockup-window bg-primary shadow-md text-center">
        <div className="px-4 border-t border-base-300 bg-white min-h-[50vh]">

          <table className="min-w-full">
            <tbody>
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <input type="checkbox" className="" />
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                  Require high security mode.
                </td>
              </tr>
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <input type="checkbox" className="" />
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                  Require high security mode.
                </td>
              </tr>
              <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <input type="checkbox" className="" />
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                  Require high security mode.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Step3