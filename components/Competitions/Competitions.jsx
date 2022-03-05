import { Competition } from '..';
import styles from './Competitions.module.css'

const Competitions = ({ available, finished }) => {
    return (
        <div className={styles.list}>
            {available.map(({ _id, name, startAt, endAt, institutions, ...rest }) => (
                <Competition key={_id} title={name} id={_id} start_at={startAt} end_at={endAt} participants={institutions} available={true} />
            ))}
            {finished.map(({ _id, name, startAt, endAt, institutions, ...rest }) => (
                <Competition key={_id} title={name} id={_id} start_at={startAt} end_at={endAt} participants={institutions} available={false} />
            ))}
        </div>
    )
}


export default Competitions