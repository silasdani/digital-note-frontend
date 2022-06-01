import React from 'react'
import UpdateTest from '../components/UpdateTest';

const EditExamPage = ({ navigate }) => {

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute w-4/5">
        <h1 className="absolute mt-6 text-3xl text-left font-bold text-white">Edit Exam</h1>

        <div className="mt-20">
          <UpdateTest navigate={navigate} />
        </div >
      </div >
    </div >
  )
}

export default EditExamPage