import { Competition } from '..';
import styles from './Competitions.module.css'

const competitions = [
    {
        "id": "asasdasd",
        "title": "Batalha de Universidades SP",
        "start_at": "2022-01-01T09:00:00",
        "end_at": "2022-10-08T09:00:00",
        "available": true,
        "participants": "FGV, Santo Agostinho, São Paulo"
    },
    {
        "id": "asasdasdasas",
        "title": "Essa aqui é meme",
        "start_at": "2022-01-01T09:00:00",
        "end_at": "2022-01-08T09:00:00",
        "available": false,
        "participants": "FGV, Santo Agostinho, São Paulo"
    },
    {
        "id": "asasdassasasd",
        "title": "Competição RJ",
        "start_at": "2022-01-01T09:00:00",
        "end_at": "2022-01-08T09:00:00",
        "available": false,
        "participants": "FGV, Santo Agostinho, São Paulo"
    }
]

const Competitions = () => (
    <div className={styles.list}>
        {competitions.map(({ id, title, start_at, end_at, participants, available, ...rest }) => (
            <Competition key={id} title={title} id={id} start_at={start_at} end_at={end_at} participants={participants} available={available} />
        ))}
    </div>
)


export default Competitions