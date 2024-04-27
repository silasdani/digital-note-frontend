import QuestionSerializer from './QuestionSerializer';

class ExamSerializer {
  static serialize(data) {
    const result = {
      exam: {
        name: data.name,
        file: data.file,
        exam_type: data.examType,
        start_time: data.startTime,
        end_time: data.endTime,
        security: data.security,
        description: data.description,
      },
      questions: QuestionSerializer.serializeIndex(data.questions),
    };

    if (data.status) result.exam['status'] = data.status;

    return result;
  }

  static deserialize(response) {
    return response;
  }
}

export default ExamSerializer;
