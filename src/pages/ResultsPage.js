import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchSubmissions } from '../redux/ducks/submissionDuck'
import { isBlank } from '../redux/helpers'

const ResultsPage = ({ submission, ...props }) => {
  const { id } = useParams()

  useEffect(() => {
    if (isBlank(id)) return;

    props.fetchSubmissions(id)
  }, [])

  if (!isBlank(id) && submission) return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute w-4/5">
        <h1 className="absolute mt-6 text-3xl text-left font-bold text-white">Results {submission.id}</h1>
        <p className="z-20 text-secondary">
          {submission.id}
        </p>
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center h-full w-full">
      <div className="absolute w-4/5">
        <h1 className="absolute mt-6 text-3xl text-left font-bold text-white">Results</h1>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const { data: submission } = state.submission.create;

  return {
    submission
  }
}

export default connect(mapStateToProps, { fetchSubmissions })(ResultsPage)