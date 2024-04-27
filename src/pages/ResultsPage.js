import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSubmissions } from '../redux/ducks/submissionDuck';
import { isBlank } from '../redux/helpers';
import ResultsForm from '../components/ResultsForm';
import { SUBMISSION_STATUSES } from '../helpers/enums';
import { BsOption } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';

const ResultsPage = ({ submissions, ...props }) => {
  const { id } = useParams();
  const examen = Array.isArray(props.exams)
    ? props.exams.find(({ id: examId }) => examId == id)
    : {};

  useEffect(() => {
    if (isBlank(id)) return;

    props.fetchSubmissions(id);
  }, []);

  if (!isBlank(id) && Array.isArray(submissions) && submissions.length === 0)
    return (
      <div className="flex flex-col items-center h-full w-full">
        <div className="absolute w-4/5">
          <h1 className="absolute mt-6 text-3xl text-left font-bold text-white">
            There are no results for this Exam
          </h1>
        </div>
      </div>
    );

  if (!isBlank(id) && Array.isArray(submissions))
    return (
      <div className="flex flex-col items-center h-full w-full">
        <div className="absolute w-4/5">
          <h1 className="absolute mt-6 text-3xl font-bold text-white text-left">Results</h1>
          <div className="bg-white mt-20 rounded-lg shadow-xl w-full">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead className="text-white">
                  <tr>
                    <th className="bg-primary">#</th>
                    <th className="bg-primary">Student Name</th>
                    <th className="bg-primary">Status</th>
                    <th className="bg-primary">Points</th>
                    <th className="bg-primary">Grade</th>
                    <th className="bg-primary">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions?.map((submission, index) => {
                    const { studentPoints, studentName, studentGrade, status } =
                      submission.attributes;

                    return (
                      <tr key={index} className="">
                        <th>{submission.id}</th>
                        <td>{studentName}</td>
                        <td>
                          <div
                            className={`badge ${
                              SUBMISSION_STATUSES.find((o) => o.value == status)?.color
                            } text-white`}
                          >
                            {status || 'started'}
                          </div>
                        </td>
                        <td className="cursor-pointer items-center justify-center">
                          <div className="flex flex-row items-center space-x-4">
                            {studentPoints || <div className="text-error">No points</div>}
                            <AiOutlineEdit size={15} onClick={() => {}}></AiOutlineEdit>
                          </div>
                        </td>
                        <td className="cursor-pointer items-center justify-center">
                          <div className="flex flex-row items-center space-x-4">
                            {studentGrade || <div className="text-error">Not graded</div>}
                            <AiOutlineEdit size={15} onClick={() => {}}></AiOutlineEdit>
                          </div>
                        </td>
                        <th className="flex flex-col">
                          <div className="dropdown dropdown-end">
                            <label
                              tabIndex="0"
                              className="btn btn-ghost btn-circle avatar focus:border focus:border-accent"
                            >
                              <div className="w-10 rounded-full">
                                <BsOption className="mt-3 ml-2" size={20} />
                              </div>
                            </label>
                            <ul
                              tabIndex="0"
                              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 border border-accent"
                            >
                              <li>
                                <label htmlFor={`preview-modal-${index}`} className="">
                                  Preview
                                </label>
                              </li>
                            </ul>
                          </div>

                          <input
                            type="checkbox"
                            id={`preview-modal-${index}`}
                            className="modal-toggle"
                          />
                          <div className="modal">
                            <div className="modal-box w-11/12 max-w-full min-h-[80vh]">
                              <h3 className="font-bold text-lg"></h3>
                              {submission?.attributes && submission?.attributes && (
                                <ResultsForm
                                  submission={submission?.attributes}
                                  examen={examen?.attributes}
                                />
                              )}
                              <div className="modal-action">
                                <label
                                  htmlFor={`preview-modal-${index}`}
                                  className="btn btn-wide btn-secondary text-white"
                                >
                                  Dismiss
                                </label>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute w-4/5">
        <h1 className="absolute mt-6 text-3xl text-left font-bold text-white">Results</h1>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { index: submissions } = state.submission;
  const { index: exams } = state.exam;

  return {
    submissions,
    exams,
  };
};

export default connect(mapStateToProps, { fetchSubmissions })(ResultsPage);
