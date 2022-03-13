import axios from "axios";
const { BACKEND_URL } = process.env;

const apiClient = axios.create(
  {
    baseURL: BACKEND_URL || "http://localhost:8080",
    responseType: 'json'
  }
)

const getCompetitionRanking = (id) => {
  return (apiClient.get(`/competitions/${id}/ranking`))
}

export { getCompetitionRanking }
