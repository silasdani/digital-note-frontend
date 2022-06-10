import ExamService from "../../services/ExamService";
import { errorHandler, successHandler } from '../helpers';

/// ACTIONS
export const CREATE_EXAM = 'CREATE_EXAM';
export const UPDATE_EXAM = 'UPDATE_EXAM';
export const FETCH_EXAM = 'FETCH_EXAM';
export const FETCH_EXAMS = 'FETCH_EXAMS';
export const CHANGE_EXAM_FIELDS = 'CHANGE_EXAM_FIELDS';
export const CHANGE_EXAM_QUESTION_FIELDS = 'CHANGE_EXAM_QUESTION_FIELDS';
export const ADD_NEW_QUESTION = 'ADD_NEW_QUESTION';
export const REMOVE_QUESTION = 'REMOVE_QUESTION';
export const CLEAR_EXAM_FIELDS = 'CLEAR_EXAM_FIELDS';
export const ACCESS_EXAM = 'ACCESS_EXAM';
export const INVALID_ACCESS_KEY = 'INVALID_ACCESS_KEY';

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

export const examFieldsCleared = () => ({
  type: CLEAR_EXAM_FIELDS,
})

export const examQuestionFieldsChanged = (data) => ({
  type: CHANGE_EXAM_QUESTION_FIELDS,
  data
})

export const newQuestionAdded = (data) => ({
  type: ADD_NEW_QUESTION,
  data
})

export const examAccessed = (data) => ({
  type: ACCESS_EXAM,
  data
})

export const questionRemoved = (data) => ({
  type: REMOVE_QUESTION,
  data
})

/// EPICS
export const createExamen = (examParams) => async (dispatch, getState) => {
  const { session } = getState().session;

  try {
    const data_1 = await new ExamService(session).create(examParams);
    dispatch(examCreated(data_1));
    dispatch(successHandler({ type: CREATE_EXAM }));
    dispatch(examFieldsCleared());
  } catch ({ response }) {
    return dispatch(errorHandler(response));
  }
}

export const updateExamen = (id, examParams) => async (dispatch, getState) => {
  const { session } = getState().session;

  try {
    const data = await new ExamService(session).editExam(id, examParams);
    dispatch(examUpdated(data));
    dispatch(successHandler({ type: UPDATE_EXAM }));
    dispatch(examFieldsCleared());
  } catch ({ response }) {
    return dispatch(errorHandler(response));
  }
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

export const removeQuestion = (index) => (dispatch, getState) => {
  const { questions } = getState().exam.create

  if (questions.length < 1 || index < 0) return;

  questions.splice(index, 1);
  dispatch(questionRemoved(questions))
}

export const setExamForUpdate = (data) => (dispatch) => {
  dispatch(examFetched(data))
}

export const accessExam = (accessKey) => async (dispatch, getState) => {
  const { session } = getState().session;

  try {
    const { data } = await new ExamService(session).viewExam({ access_key: accessKey });
    dispatch(examAccessed(data));
    if (data)
      dispatch(successHandler({ type: ACCESS_EXAM }));
    else
      dispatch(successHandler({ type: INVALID_ACCESS_KEY }));

    return data
  } catch ({ response }) {
    return dispatch(errorHandler(response));
  }
}

/// DEFAULT_STATES
const DEFAULT_QUESTION_STATE = {
  no: 0,
  required: false,
  questionType: 'option',
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
    security: 'low',
    file: null,
    type: 2,
    questions: [DEFAULT_QUESTION_STATE]
  },
  update: {
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
        create: action.data
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
    case CLEAR_EXAM_FIELDS:
      return {
        ...state,
        update: DEFAULT_EXAM_STATE.create,
        create: DEFAULT_EXAM_STATE.create,
        examen: DEFAULT_EXAM_STATE.create,
      }
    case ACCESS_EXAM:
      return {
        ...state,
        examen: action.data
      }
    case REMOVE_QUESTION: {
      return {
        ...state,
        create: {
          ...state.create,
          questions: action.data
        }
      }
    }
    default: return state
  }
}

export default exam