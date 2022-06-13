import ApiService from "./ApiService";
import SubmissionSerializer from "./Serializers/SubmissionSerializer";

class SubmissionService extends ApiService {
  constructor(session) {
    super();
    this.session = session;
  }

  fetchAll(params) {
    const config = { params };
    return super.get("submissions.json", ({ data: { data } }) => data, config)
  }

  show(id) {
    return super.get(`submission/${id}.json`, ({ data }) => data)
  }

  create(data) {
    const submission = SubmissionSerializer.serialize(data);
    return super.post("submissions.json", submission, ({ data }) => data)
  }

  editSubmission(id, data) {
    const submission = SubmissionSerializer.serialize(data);
    return super.patch(`submissions/${id}.json`, submission, ({ data }) => data)
  }
}

export default SubmissionService;