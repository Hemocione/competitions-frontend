import styles from './Ranking.module.css'
import { DonationDialog, Ranker, SimpleButton } from '..'
import { useState } from 'react'

const competition_ranks = [
    {
        "position": 1,
        "team_name": "NJR",
        "donation_count": 312
    },
    {
        "position": 2,
        "team_name": "Burger King",
        "donation_count": 311
    },
    {
        "position": 3,
        "team_name": "aaaNJR",
        "donation_count": 31
    },
    {
        "position": 4,
        "team_name": "NJR FILHO",
        "donation_count": 12
    },
    {
        "position": 5,
        "team_name": "açeNJR",
        "donation_count": 3
    }
]

const Ranking = ({ competition_id, ableToDonate, ranking, ...rest }) => {
    const [openDialog, setOpenDialog] = useState(false)
    const donationClickHandler = () => (
        setOpenDialog(true)
    )
    const dialogCloseHandler = () => (
        setOpenDialog(false)
    )
    return (
        <div>
            <table className={styles.rtable}>
                <tr>
                    <th>Posição</th>
                    <th>Time</th>
                    <th>Doações</th>
                </tr>
                {ranking.map((rank, index) => (
                    <Ranker position={index+1} team_name={rank.team.name} donation_count={rank.donation_count} key={rank.id} />
                ))}
            </table>
            {ableToDonate ? <div className={styles.buttonBox}>
                <SimpleButton handleClick={donationClickHandler}>Registre sua doação</SimpleButton>
                <DonationDialog open={openDialog} handleClose={dialogCloseHandler} />
            </div> : null}
        </div>
    )
}

export default Ranking
