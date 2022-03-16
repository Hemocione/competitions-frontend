const CompetitionStatus = ({ status, ...rest }) => {
  // status 2 = ativo, 1 = upcoming, 0 = finalizado
  const statusMapping = {
    0: {
      text: 'FINALIZADO',
      background: '#E00E16'
    },
    1: {
      text: 'EM BREVE',
      background: '#FFB655'
    },
    2: {
      text: 'ACONTECENDO',
      background: 'rgba(51, 217, 178, 1)'
    }
  }
  const statusData = statusMapping[status]

  return (
    <p style={
      {
        backgroundColor: `${statusData.background}`,
        color: "#FFFFFF",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        padding: "10px",
        fontSize: "larger",
        fontWeight: "bold",
        maxWidth: "200px"
      }
    }>
      {statusData.text}
    </p>
  )
}

export default CompetitionStatus
