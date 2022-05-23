import QuestionSerializer from './QuestionSerializer'

class ExamSerializer {
  static serialize(exam) {
    const result = {
      name: exam.name,
      options: exam.options,
      option_answer: exam.optionAnswer,
      active: exam.active,
      start_time: exam.start_time,
      end_time: exam.end_time,
      security: exam.security,
      status: exam.status,
      questions: QuestionSerializer.serializeIndex(exam.questions)
    }

    return result;
  }
}

export default ExamSerializer;