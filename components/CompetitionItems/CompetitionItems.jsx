import { CompetitionItem } from '..';
import styles from './CompetitionItems.module.css'

const CompetitionItems = () => (
    <div className={styles.list}>
        <CompetitionItem title="C1" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CompetitionItem>
        <CompetitionItem title="C2" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CompetitionItem>
        <CompetitionItem title="C3" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CompetitionItem>
        <CompetitionItem title="C4" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</CompetitionItem>
    </div>
)


export default CompetitionItems