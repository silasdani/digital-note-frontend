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

const examFieldsChanged = (data) => ({
  type: CHANGE_EXAM_FIELDS,
  data
})

export const createExamen = (examParams) => async (dispatch) => {
  const exam = ExamSerializer.serialize(examParams);

  new ExamService().create(exam)
    .then((data) => {
      dispatch(examCreated(data))
    })
}

export const DEFAULT_EXAM_STATE = {
  name: '',
  startTime: Date.now(),
  endTime: Date.now(),
  file: [],
  questions: []
}


const exam = (state = DEFAULT_EXAM_STATE, action = {}) => {
  switch (action.type) {
    case CREATE_EXAM:
      return {
        ...state,
        ...action.data
      }
  }
}

export default exam