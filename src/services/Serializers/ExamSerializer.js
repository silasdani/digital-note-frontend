import QuestionSerializer from './QuestionSerializer'
import { omit } from "lodash";

class ExamSerializer {
  static serialize(data) {

    console.warn(data.questions)
    const result = {
      exam: {
        name: data.name,
        file: data.file,
        start_time: data.startTime,
        end_time: data.endTime,
        security: data.security,
        description: data.description,
      },
      questions: QuestionSerializer.serializeIndex(data.questions)
    }

    return result;
  }

  static deserialize(response) {
    return response
  }
}

export default ExamSerializer;