import ApiService from "./ApiService";
import ExamSerializer from "./Serializers/ExamSerializer";

class ExamService extends ApiService {
  constructor(session) {
    super();
    this.session = session;
  }

  fetchAll(params) {
    const config = { params };
    return super.get("exams.json", ({ data: { data } }) => data, config)
  }

  show(id) {
    return super.get(`exam/${id}.json`, ({ data }) => data)
  }

  viewExam(params) {
    const config = { params };
    return super.get(`exams/view_exam.json`, ({ data }) => data, config)
  }
  create(data) {
    const exam = ExamSerializer.serialize(data);
    return super.post("exams.json", exam, ({ data }) => data)
  }

  editExam(id, data) {
    const exam = ExamSerializer.serialize(data);
    return super.patch(`exams/${id}.json`, exam, ({ data }) => data)
  }
}

export default ExamService;