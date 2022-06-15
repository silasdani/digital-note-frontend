import QuestionSerializer from './QuestionSerializer'

class SubmissionSerializer {
  static serialize(data) {

    const result = {
      submission: {
        student_name: data.name,
        student_class: data.studentClass,
        student_email: data.email,
        start_time: data.startTime,
        end_time: new Date(),
        access_token: data.accessToken,
        file: data.file,
      },
      question_answers: QuestionSerializer.serializeIndex(data.questionAnswers),
      access_key: data.accessKey,
    }

    return result;
  }

  static deserialize(response) {
    return response
  }
}

export default SubmissionSerializer;