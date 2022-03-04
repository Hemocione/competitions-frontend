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

const Ranking = ({ competition_id, ...rest }) => {
    const [openDialog, setOpenDialog] = useState(0)
    const donationClickHandler = () => (
        setOpenDialog(1)
    )
    const dialogCloseHandler = () => (
        setOpenDialog(0)
    )
    return (
        <div>
            <table className={styles.rtable}>
                <tr>
                    <th>Posição</th>
                    <th>Time</th>
                    <th>Doações</th>
                </tr>
                {competition_ranks.map(({ position, team_name, donation_count, ...rest }) => (
                    <Ranker position={position} team_name={team_name} donation_count={donation_count} key={team_name} />
                ))}
            </table>
            <div className={styles.buttonBox}>
                <SimpleButton handleClick={donationClickHandler}>Registre sua doação</SimpleButton>
                <DonationDialog open={openDialog} handleClose={dialogCloseHandler} />
            </div>
        </div>
    )
}

export default Ranking
