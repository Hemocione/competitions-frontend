import axios from "axios";
const { NEXT_PUBLIC_BACKEND_URL } = process.env;

const apiClient = axios.create(
  {
    baseURL: NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080",
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json'
    }
  }
)

const getCompetitions = async () => {
  return (await apiClient.get(`/competitions`))
}

const getCompetitionRanking = async (id) => {
  return (await apiClient.get(`/competitions/${id}/ranking`))
}

const registerDonation = ({competitionId, competitionTeamId, user_email, user_name, token}) => {
  return (apiClient.post(`/competitions/${competitionId}/donations`, {
    'g-recaptcha-response': token,
    'competitionTeamId': competitionTeamId,
    'user_email': user_email,
    'user_name': user_name,
    'competitionId': competitionId
  }))
}

export { getCompetitionRanking, registerDonation, getCompetitions }
