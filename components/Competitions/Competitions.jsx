import { CompetitionItem } from '..';
import styles from './Competitions.module.css'

const apiResponse = [
    {
        "id": "asasdasd",
        "title": "Competição 1",
        "start_at": "2022-01-01T09:00:00",
        "end_at": "2022-01-08T09:00:00"
    }
]

const Competitions = () => (
    <div className={styles.list}>
        <CompetitionItem title="C1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CompetitionItem>
        <CompetitionItem title="C2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CompetitionItem>
        <CompetitionItem title="C3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CompetitionItem>
        <CompetitionItem title="C4" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CompetitionItem>
    </div>
)


export default Competitions