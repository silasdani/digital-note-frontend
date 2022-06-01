class QuestionSerializer {
  static serialize(question) {
    const result = {
      no: question.no,
      text_statement: question.textStatement,
      options: question.options,
      selects: question.selects,
      question_type: question.questionType,
      tag: question.tag,
      required: question.required,
      description: question.description,
    }

    if (question.file) result['file'] = question.file;

    return result
  }

  static serializeIndex(questions) {
    if (!Array.isArray(questions) || !questions.length) return []

    return questions.reduce((result, question) => {
      result.push(this.serialize(question))
      return result
    }, [])
  }
}

export default QuestionSerializer