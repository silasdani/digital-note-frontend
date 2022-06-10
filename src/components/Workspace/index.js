import React from 'react'
import { connect } from 'react-redux'
import Description from './Description'
import Questions from './Questions'

const WorkSpace = ({ tab, ...props }) => {
  const injectContent = () => {
    if (!!tab.question) {
      return <Questions {...props} tab={tab} />
    }

    switch (tab.name) {
      case 'Description':
        return <Description {...props} />
    }
  }

  return (
    <div className="p-8">
      <div className="text-2xl text-left font-bold ">{tab.name}</div>
      {injectContent()}
    </div>
  )
}

const mapStateToProps = (state) => {
  const examen = state.exam.examen || state.exam.create

  return {
    examen
  }
}

export default connect(mapStateToProps, {})(WorkSpace)