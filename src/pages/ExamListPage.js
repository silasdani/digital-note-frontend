import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchExams } from '../redux/ducks/examDuck'
import moment from 'moment';

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
                {exams.map(((exam, index) => {
                  const { accessKey, name, startTime, status, security } = exam.attributes;

                  return (
                    <tr key={index} className="">
                      <th>{exam.id}</th>
                      <td>{name}</td>
                      <td>
                        <label for={`key-modal-${index}`} className="btn btn-ghost btn-xs">Show KEY</label>

                        <input type="checkbox" id={`key-modal-${index}`} className="modal-toggle" />
                        <div className="modal">
                          <div className="modal-box w-11/12 max-w-5xl">
                            <h2 className="font-bold text-2xl">Study hard, work hard, aim high. Your dreams are worth it. Good luck!</h2>
                            <p className="py-4 text-4xl text-center ">
                              Access Key:
                            </p>
                            <p className="text-center text-8xl ">{accessKey}
                            </p>
                            <div className="modal-action">
                              <label for={`key-modal-${index}`} className="btn">Yay!</label>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{moment(startTime).format('YY/MM/DD HH:mm')}</td>
                      <td>{security}</td>
                      <td>{status}</td>
                      <th className="flex flex-col">
                        <button className="btn btn-ghost btn-xs">details</button>
                        <label for={`preview-modal-${index}`} className="btn btn-ghost btn-xs">preview</label>

                        <input type="checkbox" id={`preview-modal-${index}`} className="modal-toggle" />
                        <div className="modal">
                          <div className="modal-box w-11/12 max-w-full min-h-[80vh]">
                            <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
                            <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                            <div className="modal-action">
                              <label for={`preview-modal-${index}`} className="btn">Yay!</label>
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

export default connect(mapStateToProps, { fetchExams })(ExamListPage)