import { CompetitionItem } from '..';
import styles from './CompetitionItens.module.css'

const CompetitionItens = () => (
    <ul className={styles.list}>
        <CompetitionItem name="C1" />
        <CompetitionItem name="C2" />
        <CompetitionItem name="C3" />
        <CompetitionItem name="C4" />
    </ul>
)


export default CompetitionItens