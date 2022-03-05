const CompetitionStatus = ({ available, ...rest }) => {
  var text = 'FINALIZADO'
  var background = '#E00E16'
  
  if (available) {
    text = 'ACONTECENDO'
    background = 'rgba(51, 217, 178, 1)'
  }

  return (
    <p style={
      {
        backgroundColor: `${background}`,
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
      {text}
    </p>
  )
}

export default CompetitionStatus
