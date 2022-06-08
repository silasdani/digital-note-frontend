import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchExams, setExamForUpdate } from '../redux/ducks/examDuck'
import moment from 'moment';
import { Link } from 'react-router-dom';
import ShowTest from '../components/ShowTest';
import { EXAM_SECURITY_TYPES } from '../helpers/enums';

const ExamListPage = ({ exams, ...props }) => {
  useEffect(() => { props.fetchExams(); }, [])

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute w-4/5">
        <h1 className="absolute mt-6 text-3xl font-bold text-white text-left">Exam List</h1>
        <div className="bg-white mt-20 rounded-lg shadow-xl w-full">
          <div className="overflow-x-auto">
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
                {exams?.map(((exam, index) => {
                  const { accessKey, name, startTime, status, security } = exam.attributes;

                  return (
                    <tr key={index} className="">
                      <th>{exam.id}</th>
                      <td>{name}</td>
                      <td>
                        <label htmlFor={`key-modal-${index}`} className="btn btn-ghost btn-xs">Show KEY</label>

                        <input type="checkbox" id={`key-modal-${index}`} className="modal-toggle" />
                        <div className="modal">
                          <div className="modal-box w-11/12 max-w-5xl">
                            <h2 className="font-bold text-2xl">
                              Study hard, work hard, aim high. Your dreams are worth it. Good luck!
                            </h2>
                            <p className="py-4 text-4xl text-center ">Access Key:</p>
                            <p className="text-center text-8xl ">{accessKey}</p>
                            <div className="modal-action">
                              <label htmlFor={`key-modal-${index}`} className="btn btn-secondary text-white">
                                Dismiss
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{moment(startTime).format('DD/MM/YY HH:mm')}</td>
                      <td>
                        <div
                          className={`badge ${EXAM_SECURITY_TYPES.find((o) => o.value == security)?.color} text-white`}
                        >
                          {security}
                        </div>
                      </td>
                      <td>{status}</td>
                      <th className="flex flex-col">
                        <Link
                          to="/edit_exam"
                          onClick={() => props.setExamForUpdate({ id: exam.id, ...exam.attributes })}
                          className="btn btn-ghost btn-xs">
                          Edit
                        </Link>
                        <label htmlFor={`preview-modal-${index}`} className="btn btn-ghost btn-xs">preview</label>

                        <input type="checkbox" id={`preview-modal-${index}`} className="modal-toggle" />
                        <div className="modal">
                          <div className="modal-box w-11/12 max-w-full min-h-[80vh]">
                            <h3 className="font-bold text-lg"></h3>
                            <ShowTest examen={exam.attributes} />
                            <div className="modal-action">
                              <label
                                htmlFor={`preview-modal-${index}`}
                                className="btn btn-wide btn-secondary text-white">
                                Dismiss
                              </label>
                            </div>
                          </div>
                        </div>
                      </th>
                    </tr>)
                }))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { index: exams } = state.exam;

  return {
    exams
  }
}

export default connect(mapStateToProps, { fetchExams, setExamForUpdate })(ExamListPage)