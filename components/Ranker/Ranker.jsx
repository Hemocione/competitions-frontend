import styles from './Ranker.module.css'

const Ranker = ({ position, name, donation_count }) => {
    const position_map = {
        1: <img alt="First Place" src='/medals/first.png' className={styles.medal} />,
        2: <img alt="Second Place" src='/medals/second.png' className={styles.medal} />,
        3: <img alt="Third Place" src='/medals/third.png' className={styles.medal} />
    }

    return (
        <tr className={styles.row}>
            <td>{position_map[position] ||
                <span className={styles.number_position}>
                    {position}
                </span>}</td>
            <td>{name}</td>
            <td className={styles.dcount}>{donation_count}</td>
        </tr>
    )
}

export default Ranker
