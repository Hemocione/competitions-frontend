import styles from './CompetitionItem.module.css'

const CompetitionItem = ({ children, title }) => (
    <li>
        <div className={styles.show}>
            <img src="https://upload.travelawaits.com/ta/uploads/2021/04/aerial-view-of-rio-de-janeiroee4454.jpg" />
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
        <div><hr /></div>
    </li >
)

export default CompetitionItem