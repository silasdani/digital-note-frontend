import SubmissionService from "../../services/SubmissionService"
import { errorHandler, successHandler } from '../helpers';

/// ACTIONS
export const CREATE_SUBMISSION = 'CREATE_SUBMISSION';
export const FETCH_SUBMISSION = 'FETCH_SUBMISSION';
export const FETCH_SUBMISSIONS = 'FETCH_SUBMISSIONS';
export const CHANGE_SUBMISSION_FIELDS = 'CHANGE_SUBMISSION_FIELDS';
export const CHANGE_SUBMISSION_QUESTION_FIELDS = 'CHANGE_SUBMISSION_QUESTION_FIELDS';
export const CLEAR_SUBMISSION_FIELDS = 'CLEAR_SUBMISSION_FIELDS';

/// DUCKS
const submissionCreated = (data) => ({
  type: CREATE_SUBMISSION,
  data
})
const submissionFetched = (data) => ({
  type: FETCH_SUBMISSION,
  data
})
const submissionsFetched = (data) => ({
  type: FETCH_SUBMISSIONS,
  data
})

const submissionFieldsChanged = (data) => ({
  type: CHANGE_SUBMISSION_FIELDS,
  data
})

const submissionFieldsCleared = () => ({
  type: CLEAR_SUBMISSION_FIELDS,
})

const submissionQuestionFieldsChanged = (data) => ({
  type: CHANGE_SUBMISSION_QUESTION_FIELDS,
  data
})

/// EPICS
export const createSubmission = (submissionParams) => async (dispatch, getState) => {
  const { session } = getState().session;

  try {
    const data = await new SubmissionService(session).create(submissionParams);
    dispatch(submissionCreated(data));
    dispatch(successHandler({ type: CREATE_SUBMISSION }));
    dispatch(submissionFieldsCleared());
  } catch ({ response }) {
    return dispatch(errorHandler(response));
  }
}

export const fetchSubmission = () => (dispatch, getState) => {
  const { session } = getState().session;

  new SubmissionService(session).show()
    .then((data) => {
      dispatch(submissionFetched(data))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const fetchSubmissions = () => (dispatch, getState) => {
  const { session } = getState().session;

  new SubmissionService(session).fetchAll({ active: 1, draft: 0 })
    .then((data) => {
      dispatch(submissionsFetched(data))
      dispatch(successHandler({ type: FETCH_SUBMISSIONS }))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const fetchDraftSubmissions = () => (dispatch, getState) => {
  const { session } = getState().session;

  new SubmissionService(session).fetchAll({ active: 0, draft: 1 })
    .then((data) => {
      dispatch(submissionsFetched(data))
    })
    .catch(({ response }) => dispatch(errorHandler(response)))
}

export const updateSubmissionFields = (field, data) => (dispatch) => {
  dispatch(submissionFieldsChanged({ field, data }))
}

export const updateQuestionFields = (index, field, data) => (dispatch) => {
  dispatch(submissionQuestionFieldsChanged({ index, field, data }))
}

/// DEFAULT_STATES
export const DEFAULT_SUBMISSION_STATE = {
  studentName: '',
  studentClass: '',
  studentEmail: '',
  startTime: new Date(),
  endTime: new Date(),
  file: null,
  questionAnswers: [{
    no: 0,
    option: '',
    file: null,
    selects: [],
    text: ''
  }, {
    no: 1,
    option: '',
    file: null,
    selects: [],
    text: ''
  }, {
    no: 2,
    option: '',
    file: null,
    selects: [],
    text: ''
  }, {
    no: 3,
    option: '',
    file: null,
    selects: [],
    text: ''
  },
  ]
}

const DEFAULT_STATE = {
  index: [{
    attributes: DEFAULT_SUBMISSION_STATE
  }],
  create: DEFAULT_SUBMISSION_STATE,
  show: DEFAULT_SUBMISSION_STATE,
}

/// REDUCER
const submission = (state = DEFAULT_STATE, action = {}) => {
  switch (action.type) {
    case CREATE_SUBMISSION:
      return {
        ...state,
        show: action.data
      }
    case FETCH_SUBMISSIONS:
      return {
        ...state,
        index: action.data
      }
    case FETCH_SUBMISSION:
      return {
        ...state,
        create: action.data
      }
    case CHANGE_SUBMISSION_FIELDS:
      return {
        ...state,
        create: {
          ...state.create,
          [action.data.field]: action.data.data
        }
      }
    case CHANGE_SUBMISSION_QUESTION_FIELDS: {
      const questionAnswers = [...state.create.questionAnswers];

      questionAnswers[action.data.index] = {
        ...questionAnswers[action.data.index],
        [action.data.field]: action.data.data
      }
      return {
        ...state,
        create: {
          ...state.create,
          questionAnswers
        }
      }
    }
    case CLEAR_SUBMISSION_FIELDS:
      return DEFAULT_STATE
    default:
      return state
  }
}

export default submission;