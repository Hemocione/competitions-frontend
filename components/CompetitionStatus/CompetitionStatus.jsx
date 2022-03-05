import AvailableCompetitionStatus from './AvailableCompetitionStatus/AvailableCompetitionStatus'
import UnavailableCompetitionStatus from './UnavailableCompetitionStatus/UnavailableCompetitionStatus'

const CompetitionStatus = ({ available, ...rest }) => {
  if (available) {
    return(<AvailableCompetitionStatus />)
  } else {
    return(<UnavailableCompetitionStatus />)
  }
}

export default CompetitionStatus
