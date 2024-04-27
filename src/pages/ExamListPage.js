import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchExams, setExamForUpdate, updateExamen } from '../redux/ducks/examDuck';
import moment from 'moment';
import { Link } from 'react-router-dom';
import ShowTest from '../components/ShowTest';
import { EXAM_SECURITY_TYPES, EXAM_STATUSES } from '../helpers/enums';
import { BsOption } from 'react-icons/bs';

const ExamListPage = ({ exams, ...props }) => {
  useEffect(() => {
    props.fetchExams();
  }, []);

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute w-4/5">
        <h1 className="absolute mt-6 text-3xl font-bold text-white text-left">Exam List</h1>
        <div className="bg-white mt-20 rounded-lg shadow-xl w-full">
          <div className="overflow-x-auto min-h-[70vh]">
            <table className="table w-full">
              <thead className="text-white">
                <tr>
                  <th className="bg-primary"></th>
                  <th className="bg-primary">Name</th>
                  <th className="bg-primary">Access Key</th>
                  <th className="bg-primary">Start Time</th>
                  <th className="bg-primary">Security</th>
                  <th className="bg-primary">Status</th>
                  <th className="bg-primary"></th>
                </tr>
              </thead>
              <tbody>
                {exams?.map((exam, index) => {
                  const { accessKey, name, startTime, status, security } = exam.attributes;

                  return (
                    <tr key={index} className="">
                      <th>{exam.id}</th>
                      <td>{name}</td>
                      <td>
                        <label htmlFor={`key-modal-${index}`} className="btn btn-ghost btn-xs">
                          Show KEY
                        </label>

                        <input type="checkbox" id={`key-modal-${index}`} className="modal-toggle" />
                        <div className="modal">
                          <div className="modal-box w-11/12 max-w-5xl">
                            <p className="py-4 text-4xl text-center ">Access Key:</p>
                            <p className="text-center text-8xl ">{accessKey}</p>
                            <div className="modal-action">
                              <label
                                htmlFor={`key-modal-${index}`}
                                className="btn btn-secondary text-white"
                              >
                                Dismiss
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{moment(startTime).format('DD/MM/YY HH:mm')}</td>
                      <td>
                        <div
                          className={`badge ${
                            EXAM_SECURITY_TYPES.find((o) => o.value == security)?.color
                          } text-white`}
                        >
                          {security}
                        </div>
                      </td>
                      <td>
                        <div
                          className={`badge ${
                            EXAM_STATUSES.find((o) => o.value == status)?.color
                          } text-white`}
                        >
                          {status}
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
                              <Link to={`/results/${exam.id}`}>Submissions</Link>
                            </li>
                            <li>
                              <Link
                                to="/edit_exam"
                                onClick={() =>
                                  props.setExamForUpdate({ id: exam.id, ...exam.attributes })
                                }
                                className=""
                              >
                                Edit
                              </Link>
                            </li>
                            <li>
                              <label htmlFor={`preview-modal-${index}`} className="">
                                Preview
                              </label>
                            </li>
                            <li>
                              <label htmlFor={`archive-modal-${index}`} className="">
                                Archive
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
                            <ShowTest examen={exam.attributes} />
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
                        <input
                          type="checkbox"
                          id={`archive-modal-${index}`}
                          className="modal-toggle"
                        />
                        <div className="modal">
                          <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you sure you?</h3>
                            <div className="modal-action flex justify-center">
                              <label
                                htmlFor={`archive-modal-${index}`}
                                className="btn btn-sm w-24 btn-info text-white"
                                onClick={() => {
                                  props.updateExamen(exam.id, {
                                    ...exam.attributes,
                                    status: 'archived',
                                  });
                                }}
                              >
                                Yes
                              </label>
                              <label
                                htmlFor={`archive-modal-${index}`}
                                className="btn btn-sm w-24 btn-error text-white"
                              >
                                Cancel
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
};

const mapStateToProps = (state) => {
  const { index: exams } = state.exam;

  return {
    exams,
  };
};

export default connect(mapStateToProps, { fetchExams, setExamForUpdate, updateExamen })(
  ExamListPage
);
