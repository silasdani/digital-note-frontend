import React from 'react';

const Step2 = ({ examen, ...props }) => {
  return (
    <div className="Student Workspace">
      <div className="mockup-window bg-primary shadow-md text-center">
        <div className="absolute text-2xl font-bold text-center text-white h1 -mt-10 w-full">
          WORKSPACE
        </div>

        <div className="px-4 border-t border-base-300 bg-white min-h-[50vh]">
          <div className="text-lg py-2">Form area</div>
          {examen.examType !== 'digital' ? (
            <p className="py-2">
              There would not be a desired workspace for students due the type of exam is not
              digital
            </p>
          ) : (
            <>
              <p className="py-2">
                Student information is replaced by a unique code and the teacher can identify
                students after making the exam.
              </p>
              <input type="checkbox" className="toggle toggle-primary" />
              <div className="italic text-sm">
                The student is given an area to resolve the form.
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step2;
