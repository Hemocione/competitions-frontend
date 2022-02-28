import styles from './Ranking.module.css'
import { Ranker, ButtonWithLink } from '..'

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

const Ranking = ({open, competition_id, ...rest}) => {

    if (!open) {
        return null 
    }

    return (
        <div>
            <table className={styles.rtable}>
                <tr>
                    <th>Posição</th>
                    <th>Time</th>
                    <th>Doações</th>
                </tr>
                {competition_ranks.map(({position, team_name, donation_count, ...rest}) => (
                    <Ranker position={position} team_name={team_name} donation_count={donation_count} key={team_name} />
                ))}
            </table>
            <div className={styles.buttonBox}>
                <ButtonWithLink link='/donated' text='Registre sua doação' />
            </div>
        </div>
    )
}

export default Ranking
