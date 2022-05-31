import QuestionSerializer from './QuestionSerializer'
import { omit } from "lodash";

class ExamSerializer {
  static serialize(data) {
    const result = {
      exam: {
        name: data.name,
        file: data.file,
        start_time: data.startTime,
        end_time: data.endTime,
        security: data.security,
      },
      questions: QuestionSerializer.serializeIndex(data.questions)
    }

    return result;
  }
}

export default ExamSerializer;