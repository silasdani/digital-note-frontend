import React from 'react';
import { Step0, Step1, Step2, Step3 } from './createTestSteps'

const CreateTest = ({ page, setPage }) => {
  const onNextPage = () => setPage((page + 1) % 5);
  const onPrevPage = () => setPage(page - 1);

  return (
    <>
      {page == 0 && <Step0 />}
      {page == 1 && <Step1 />}
      {page == 2 && <Step2 />}
      {page == 3 && <Step3 />}

      <div className="my-10 mx-auto w-56 btn-group grid grid-cols-2">
        {page > 0 ? <button className="btn btn-outline" onClick={onPrevPage}>Previous</button> : <div />}
        {page < 3 && <button className="btn btn-outline" onClick={onNextPage}>Next</button>}
        {page == 3 && <button className="btn" onClick={() => { }}>Finish</button>}
      </div>
    </>
  )
}

export default CreateTest