import ApiService from "./ApiService";
import ContestantSerializer from "./Serializers/ContestantSerializer";

class LobbyService extends ApiService {
  constructor(session) {
    super();
    this.session = session;
  }

  showContestant(id) {
    return super.get(`contestants/${id}.json`, ({ data }) => data)
  }

  createContestant(data) {
    const contestant = ContestantSerializer.serialize(data);

    return super.post("contestants.json", contestant, (({ data }) => data))
  }

  fetchAll(params) {
    const config = { params };
    return super.get("contestants.json", (({ data }) => data), config)
  }

  changePermissions({ id, permissions }) {
    return super.patch(`contestants/${id}.json`, permissions)
  }
}

export default LobbyService;