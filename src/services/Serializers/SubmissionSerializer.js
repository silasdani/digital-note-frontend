import QuestionSerializer from './QuestionSerializer'

class SubmissionSerializer {
  static serialize(data) {
    const result = {
      submission: {
        name: data.name,
        file: data.file,
        start_time: data.startTime,
        end_time: data.endTime,
      },
      question_answers: QuestionSerializer.serializeIndex(data.questionAnswers)
    }

    return result;
  }

  static deserialize(response) {
    return response
  }
}

export default SubmissionSerializer;