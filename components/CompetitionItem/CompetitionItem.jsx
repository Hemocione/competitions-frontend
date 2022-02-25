import styles from './CompetitionItem.module.css'

const CompetitionItem = ({ name }) => (
    <li className={styles.item}>
        <img src="https://upload.travelawaits.com/ta/uploads/2021/04/aerial-view-of-rio-de-janeiroee4454.jpg" />
        <h3>{name}</h3>
        <p>Lorem ipsum dolor sit amet...</p>
    </li >
)

export default CompetitionItem