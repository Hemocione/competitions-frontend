import axios from "axios";
const { NEXT_PUBLIC_BACKEND_URL } = process.env;

const apiClient = axios.create(
  {
    baseURL: NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080",
    responseType: 'json'
  }
)

const getCompetitionRanking = (id) => {
  console.log(NEXT_PUBLIC_BACKEND_URL)
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
