export const EXAM_QUESTION_TYPES = [
  {
    id: 1,
    name: 'Questions on paper'
  },
  {
    id: 2,
    name: 'Upload a file'
  },
  {
    id: 3,
    name: 'Digital Questions'
  }
];

export const SECURITY_TYPES = [
  {
    id: 0,
    name: 'low',
  },
  {
    id: 1,
    name: 'moderate',
  },
  {
    id: 2,
    name: 'high',
  }
]

export const DEFAULT_EXAM_STATE = {
  name: '',
  type: EXAM_QUESTION_TYPES[0].name,
  security: SECURITY_TYPES[0].name,
  startTime: Date.now(),
  endTime: Date.now(),
  files: [],
  anonymous: false,

}
