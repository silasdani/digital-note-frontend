import ExamService from "../../services/ExamService";
import ExamSerializer from "../../services/Serializers/ExamSerializer";
import { errorHandler, successHandler } from '../helpers';

/// ACTIONS
export const CREATE_EXAM = 'CREATE_EXAM';
export const UPDATE_EXAM = 'UPDATE_EXAM';
export const FETCH_EXAM = 'FETCH_EXAM';
export const FETCH_EXAMS = 'FETCH_EXAMS';
export const CHANGE_EXAM_FIELDS = 'CHANGE_EXAM_FIELDS';
export const CHANGE_EXAM_QUESTION_FIELDS = 'CHANGE_EXAM_QUESTION_FIELDS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';

/// DUCKS
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

export const examQuestionFieldsChanged = (data) => ({
  type: CHANGE_EXAM_QUESTION_FIELDS,
  data
})

export const newQuestionAdded = (data) => ({
  type: ADD_NEW_QUESTION,
  data
})

/// EPICS
export const createExamen = (examParams) => (dispatch, getState) => {
  const { session } = getState().session;

  new ExamService(session).create(examParams)
    .then((data) => {
      dispatch(examCreated(data))
      dispatch(successHandler({ type: CREATE_EXAM }))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const updateExamen = (examParams) => (dispatch, getState) => {
  const exam = ExamSerializer.serialize(examParams);
  const { session } = getState().session;

  new ExamService(session).editExam(exam)
    .then((data) => {
      dispatch(examUpdated(data))
      dispatch(successHandler({ type: UPDATE_EXAM }))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const fetchExamen = () => (dispatch, getState) => {
  const { session } = getState().session;

  new ExamService(session).show()
    .then((data) => {
      dispatch(examFetched(data))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const fetchExams = () => (dispatch, getState) => {
  const { session } = getState().session;

  new ExamService(session).fetchAll({ active: 1, draft: 0 })
    .then((data) => {
      dispatch(examsFetched(data))
      dispatch(successHandler({ type: FETCH_EXAMS }))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const fetchDraftExams = () => (dispatch, getState) => {
  const { session } = getState().session;

  new ExamService(session).fetchAll({ active: 0, draft: 1 })
    .then((data) => {
      dispatch(examsFetched(data))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const updateExamFields = (field, data) => (dispatch) => {
  dispatch(examFieldsChanged({ field, data }))
}

export const updateQuestionFields = (index, field, data) => (dispatch) => {
  dispatch(examQuestionFieldsChanged({ index, field, data }))
}

export const addNewQuestion = (data) => (dispatch) => {
  dispatch(newQuestionAdded(data))
}

/// DEFAULT_STATES
const DEFAULT_QUESTION_STATE = {
  no: 0,
  required: false,
  questionType: 1,
  textStatement: '',
  description: '',
  file: null,
  options: ['option 1', 'serif'],
  selects: ['question', 'selects']
}

export const DEFAULT_EXAM_STATE = {
  index: [{
    attributes: {
      accessKey: '#####',
      name: '',
      startTime: new Date(),
      endTime: new Date(),
      file: null,
      status: 'active',
      security: 'low',
      questions: []
    }
  }],
  create: {
    name: '',
    startTime: new Date().toISOString().slice(0, -8),
    endTime: new Date().toISOString().slice(0, -8),
    security: 0,
    file: null,
    type: 2,
    questions: [DEFAULT_QUESTION_STATE]
  },
  show: {
    name: '',
    startTime: new Date(),
    endTime: new Date(),
    file: null,
    questions: []
  }
}

/// REDUCER
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
        create: {
          ...state.create,
          [action.data.field]: action.data.data
        }
      }
    case CHANGE_EXAM_QUESTION_FIELDS: {
      const questions = [...state.create.questions];
      questions[action.data.index] = {
        ...questions[action.data.index],
        [action.data.field]: action.data.data
      }
      return {
        ...state,
        create: {
          ...state.create,
          questions
        }
      }
    }
    case ADD_NEW_QUESTION:
      return {
        ...state,
        create: {
          ...state.create,
          questions: [...state.create.questions, { ...DEFAULT_QUESTION_STATE, ...action.data }]
        }
      }
    default: return state
  }
}

export default exam