export const EXAM_QUESTION_TYPES = [
  {
    value: 'paper',
    name: 'Questions on paper',
  },
  {
    value: 'file',
    name: 'Upload a file',
  },
  {
    value: 'digital',
    name: 'Create Questions',
  },
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
  },
];

export const EXAM_STATUSES = [
  {
    value: 'active',
    name: 'Active',
    color: 'bg-green-400 border-green-400',
  },
  {
    value: 'draft',
    name: 'Draft',
    color: 'badge-ghost',
  },
  {
    value: 'archived',
    name: 'Archived',
    color: '',
  },
  {
    value: 'completed',
    name: 'Completed',
    color: 'bg-green-900 border-green-900',
  },
];
export const SUBMISSION_STATUSES = [
  {
    value: 'started',
    color: '',
  },
  {
    value: 'in_progress',
    color: 'badge-ghost',
  },
  {
    value: 'completed',
    color: 'bg-green-400 border-green-400',
  },
  {
    value: 'graded',
    color: 'bg-green-900 border-green-900',
  },
];

export const QUESTION_TYPES = [
  {
    value: 'text',
    name: 'Short answer',
  },
  {
    value: 'option',
    name: 'Option answer',
  },
  {
    value: 'file',
    name: 'Upload file answer',
  },
  {
    value: 'choose',
    name: 'Select answer',
  },
];

export const PERMISSIONS = {
  write: 'write',
  read: 'read',
  send: 'send',
  get: 'get',
};
