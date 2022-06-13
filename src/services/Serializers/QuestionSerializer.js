import { isBlank } from '../../redux/helpers';

class CustomFormData {
  constructor() {
    this.result = {}
  }

  append(fieldName, value) {
    if (isBlank(value)) return;

    this.result[fieldName] = value;
  }

  serializedJson() {
    return this.result;
  }
}

class QuestionSerializer {
  static serialize(question) {
    const result = new CustomFormData();

    result.append("no", question.no)
    result.append("text_statement", question.textStatement)
    result.append("text", question.text)
    result.append("options", question.options)
    result.append("option", question.option)
    result.append("selects", question.selects)
    result.append("question_type", question.questionType)
    result.append("tag", question.tag)
    result.append("required", question.required)
    result.append("description", question.description)
    result.append("file", question.file)


    return result.serializedJson();
  }

  static serializeIndex(questions) {
    if (!Array.isArray(questions) || !questions.length) return []

    return questions.reduce((result, question) => result.concat(this.serialize(question)), [])
  }
}

export default QuestionSerializer