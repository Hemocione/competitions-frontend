import styles from './Ranking.module.css'
import { DonationDialog, Ranker, SimpleButton } from '..'
import { useState } from 'react'
import { MenuItem, FormControl, Select } from '@mui/material';

const Ranking = ({ competition_id, ableToDonate, ranking, rankingType, onRankingTypeChange, ...rest }) => {
    const [openDialog, setOpenDialog] = useState(false)

    const donationClickHandler = () => (
        setOpenDialog(true)
    )
    const dialogCloseHandler = () => (
        setOpenDialog(false)
    )
    const rankingTypeChangeHandler = (event) => {
        onRankingTypeChange(event.target.value)
    }

    return (
        <div>
            {ableToDonate ? <div className={styles.buttonBox}>
                <SimpleButton handleClick={donationClickHandler}>Registre sua doação</SimpleButton>
                <DonationDialog open={openDialog} handleClose={dialogCloseHandler} competitionTeams={ranking} competitionId={competition_id} />
            </div> : null}
            <table className={styles.rtable}>
                <thead>
                    <tr>
                        <th>Posição</th>
                        <th>
                            <FormControl>
                               <Select
                                labelId="ranking-type"
                                id="ranking-type"
                                value={rankingType}
                                onChange={rankingTypeChangeHandler}
                                inputProps={{ 'aria-label': 'Tipo de ranking' }}
                                style={
                                    {
                                        fontFamily: "arial",
                                        fontWeight: "bold",
                                        padding: "9px",
                                        backgroundColor: "#D1151A",
                                        color: "#FFF",
                                        borderColor: "#FFF"
                                    }
                                }
                               >
                                <MenuItem value="teams">Time</MenuItem>
                                <MenuItem value="institutions">Instituição</MenuItem>
                               </Select>
                            </FormControl>
                        </th>
                        <th>Doações</th>
                    </tr>
                </thead>
                <tbody>
                {ranking.map((rank, index) => (
                    <Ranker position={index+1} name={rank.name} donation_count={rank.donation_count} key={rank.id} />
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Ranking
