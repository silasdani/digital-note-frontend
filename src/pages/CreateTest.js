import React, { useState } from 'react'
import Switch from 'react-ios-switch';


const CreateTest = () => {
  const [checked, setCheck] = useState(true)

  return (
    <div className="flex flex-col items-center justify-center">
      CreateTest
      <div className="myExams">
        <table className='table-auto'>
          <thead>
            <th>Exam name</th>
            <th>Exam key</th>
            <th>Created</th>
            <th>Status</th>
            <th>Handle</th>
            <th>Open for new students</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td>NATO</td>
              <td>FABSJGDF</td>
              <td>20-10-2022</td>
              <td>√</td>
              <td>Matias este un baiat model</td>
              <td>
                <Switch
                  checked={checked}
                  className={undefined}
                  disabled={false}
                  handleColor="white"
                  name={undefined}
                  offColor="white"
                  onChange={() => { setCheck(!checked); }}
                  onColor="rgb(0, 0, 0)"
                  pendingOffColor={undefined}
                  pendingOnColor={undefined}
                  readOnly={undefined}
                  style={undefined}
                />
              </td>
              <td>
                :
              </td>
            </tr>
          </tbody>
        </table>
        {/* <button className="btn btn-simple">Access test</button>
        <button className="btn-outline">Access test</button>
        <button className="btn-pill">Access test</button> */}
      </div>
      {['class_8', 'class_9', 'class_10'].map((cls) => {

        return (
          <div className="class">

          </div>
        )
      })}
    </div>
  )
}

export default CreateTest