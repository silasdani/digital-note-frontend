import React, { useState } from 'react'
import CreateTest from '../components/CreateTest';

const NewExamPage = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute w-4/5">
        <h1 className="absolute mt-6 text-3xl text-left font-bold text-white">New Exam</h1>
        <div className="text-white mt-6 flex justify-center items-center">
          <ul className="steps steps-vertical lg:steps-horizontal pt-10 lg:-mt-10">
            <li className={`cursor-pointer step ${page >= 0 ? 'step-primary' : ''} uppercase`} onClick={() => setPage(0)}>Exam Info</li>
            <li className={`cursor-pointer step ${page >= 1 ? 'step-primary' : ''} uppercase`} onClick={() => setPage(1)}>Exam Questions</li>
            <li className={`cursor-pointer step ${page >= 2 ? 'step-primary' : ''} uppercase`} onClick={() => setPage(2)}>Student Workspace</li>
          </ul>
        </div>
        <div className="mt-10">
          <CreateTest className="h-full" page={page} setPage={setPage} />
        </div >
      </div >
    </div >
  )
}

export default NewExamPage