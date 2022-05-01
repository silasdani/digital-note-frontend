import React from 'react'
import CreateTest from '../components/CreateTest';

const NewExamPage = () => {
  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="text-2xl">
        New Exam Page
      </div >
      <CreateTest />
    </div>
  )
}

export default NewExamPage