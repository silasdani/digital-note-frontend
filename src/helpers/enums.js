export const EXAM_QUESTION_TYPES = [
  {
    value: 0,
    name: 'Questions on paper'
  },
  {
    value: 1,
    name: 'Upload a file'
  },
  {
    value: 2,
    name: 'Create Questions'
  }
];

export const EXAM_SECURITY_TYPES = [
  {
    value: 'low',
    name: 'Low',
    color: 'bg-red-600 border-red-600',
  },
  {
    value: 'moderate',
    name: 'Moderate',
    color: 'bg-yellow-500 border-yellow-500',
  },
  {
    value: 'high',
    name: 'High',
    color: 'bg-green-600 border-green-600',
  }
]

export const EXAM_STATUSES = [
  {
    value: 0,
    name: 'Active'
  },
  {
    value: 1,
    name: 'Draft'
  },
  {
    value: 3,
    name: 'Archived'
  },
  {
    value: 4,
    name: 'Completed'
  },
]

export const QUESTION_TYPES = [
  {
    value: "text",
    name: 'Short answer'
  },
  {
    value: "option",
    name: 'Option answer'
  },
  {
    value: "file",
    name: 'Upload file answer'
  },
  {
    value: "choose",
    name: 'Select answer'
  },
]