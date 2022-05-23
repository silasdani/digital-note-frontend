import ExamService from "../../services/ExamService";
import ExamSerializer from "../../services/Serializers/ExamSerializer";

import { DEFAULT_STATE } from '../../helpers/enums'

const CREATE_EXAM = 'CREATE_EXAM';
const UPDATE_EXAM = 'UPDATE_EXAM';
const FETCH_EXAM = 'FETCH_EXAM';
const FETCH_EXAMS = 'FETCH_EXAMS';
const CHANGE_EXAM_FIELDS = 'CHANGE_EXAM_FIELDS';

const examCreated = (data) => ({
  type: CREATE_EXAM,
  data
})

const examUpdated = (data) => ({
  type: UPDATE_EXAM,
  data
})

const examFetched = (data) => ({
  type: FETCH_EXAM,
  data
})

const examsFetched = (data) => ({
  type: FETCH_EXAMS,
  data
})

export const examFieldsChanged = (data) => ({
  type: CHANGE_EXAM_FIELDS,
  data
})

export const createExamen = (examParams) => (dispatch) => {
  const exam = ExamSerializer.serialize(examParams);

  new ExamService().create(exam)
    .then((data) => {
      dispatch(examCreated(data))
    })
}

export const updateExamen = (examParams) => (dispatch) => {
  const exam = ExamSerializer.serialize(examParams);

  new ExamService().editExam(exam)
    .then((data) => {
      dispatch(examUpdated(data))
    })
}

export const fetchExamen = () => (dispatch) => {
  const exam = ExamSerializer.serialize(examParams);

  new ExamService().show()
    .then((data) => {
      dispatch(examFetched(data))
    })
}

export const fetchExams = () => (dispatch) => {
  const exam = ExamSerializer.serialize(examParams);

  new ExamService().fetchAll()
    .then((data) => {
      dispatch(examsFetched(data))
    })
}

export const updateExamFields = (data) => (dispatch) => {
  dispatch(examFieldsChanged(data))
}

export const DEFAULT_EXAM_STATE = {
  index: [{
    name: '',
    startTime: new Date(),
    endTime: new Date(),
    file: [],
    questions: []
  }],
  create: {
    name: '',
    startTime: new Date(),
    endTime: new Date(),
    file: [],
    questions: []
  },
  show: {
    name: '',
    startTime: new Date(),
    endTime: new Date(),
    file: [],
    questions: []
  }
}

const exam = (state = DEFAULT_EXAM_STATE, action = {}) => {
  switch (action.type) {
    case CREATE_EXAM:
      return {
        ...state,
        show: action.data
      }
    case UPDATE_EXAM:
      return {
        ...state,
        show: action.data
      }
    case FETCH_EXAMS:
      return {
        ...state,
        index: action.data
      }
    case FETCH_EXAM:
      return {
        ...state,
        show: action.data
      }
    case CHANGE_EXAM_FIELDS:
      return {
        ...state,
        create: action.data
      }
    default: return state
  }
}

export default exam