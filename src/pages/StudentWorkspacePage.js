import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import WorkSpace from '../components/Workspace';

const TABS = [
  {
    name: 'Description',
    index: 0,
    question: false,
  },
  {
    name: 'Questions',
    index: 1,
    subTabs: [],
    question: false,
  }
]

const StudentWorkspacePage = ({ questions }) => {
  const [tabs, setTabs] = useState(TABS);
  const [currentTab, setCurrentTab] = useState(tabs[0])

  useEffect(() => {
    setTabs(tabs.reduce((res, tab) => {
      res.push(tab.name === 'Questions' ? {
        ...tab,
        subTabs: questions?.map((q) => ({
          // name: `${q.no + 1}. ${q.textStatement}`,
          name: `Q${q.no + 1}.`,
          index: q.no,
          question: true,
        }))
      } : tab)

      return res
    }, []))
  }, [])

  const QuestionItems = ({ items, ...props }) => {
    return (<ul>
      {items?.map((item, index) => {

        return (
          <li key={index} className={`${item.name === currentTab.name ? 'text-primary' : ''}`}>
            <a className="ml-4" onClick={() => setCurrentTab(item)}>
              {item.name}
            </a>
          </li>
        )
      })}
    </ul>
    )
  }

  const onMoveQuestion = (step) => {
    const questionTabs = tabs.find((tab => tab.name === "Questions")).subTabs
    if (
      !questionTabs.includes(currentTab)
      || currentTab.index + step < 0
      || currentTab.index + step > questionTabs.length - 1
    ) return;

    setCurrentTab(questionTabs.find(({ index }) => index === currentTab.index + step))
  }

  return (
    <div className="absolute w-full h-auto bg-base-200">
      <div className="drawer drawer-mobile fixed bg-base-200">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-0 ml-0">
          <label htmlFor="my-drawer-2" className="absolute btn btn-primary rounded-none drawer-button lg:hidden">Menu</label>
          <WorkSpace tab={currentTab} onMoveQuestion={onMoveQuestion} />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 text-white text-2xl bg-accent">
            {tabs.map((item, index) => {
              if (item.name === 'Questions') return (<div key={index}>
                <button type="button" className={`disabled text-left p-4 ${item.subTabs?.includes(currentTab) ? 'text-primary' : ''}`}>{item.name}</button>
                <QuestionItems items={item.subTabs || []} />
              </div>)

              return (
                <li
                  key={item.index}
                  className={`${currentTab.name == item.name ? 'text-primary' : ''}`}
                >
                  <a onClick={() => setCurrentTab(item)}>{item.name}</a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default connect((state) => ({ questions: state.exam?.examen?.questions || state.exam.create.questions }))(StudentWorkspacePage)