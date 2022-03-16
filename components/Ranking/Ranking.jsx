import styles from './Ranking.module.css'
import { DonationDialog, Ranker, SimpleButton } from '..'
import { useState } from 'react'

const Ranking = ({ competition_id, ableToDonate, ranking, ...rest }) => {
    const [openDialog, setOpenDialog] = useState(false)
    const donationClickHandler = () => (
        setOpenDialog(true)
    )
    const dialogCloseHandler = () => (
        setOpenDialog(false)
    )
    return (
        <div style={{marginBottom: '36px'}}>
            {ableToDonate ? <div className={styles.buttonBox}>
                <SimpleButton handleClick={donationClickHandler}>Registre sua doação</SimpleButton>
                <DonationDialog open={openDialog} handleClose={dialogCloseHandler} competitionTeams={ranking} competitionId={competition_id} />
            </div> : null}
            <table className={styles.rtable}>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>Time</th>
                        <th>Doações</th>
                    </tr>
                </thead>
                <tbody>
                {ranking.map((rank, index) => (
                    <Ranker position={index+1} team_name={rank.team.name} donation_count={rank.donation_count} key={rank.id} />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Ranking
