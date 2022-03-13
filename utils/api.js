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

const registerDonation = (competitionId, competitionTeamId, user_email, user_name) => {
  return (apiClient.post(`/competitions/${competitionId}/donations`, {
    competitionTeamId: competitionTeamId,
    user_email: user_email,
    user_name: user_name,
    competitionId: competitionId
  }))
}

export { getCompetitionRanking, registerDonation }
