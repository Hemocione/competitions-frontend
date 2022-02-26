import styles from './Ranking.module.css'

const Ranking = () => (
    <table className={styles.rtable}>
        <tr>
            <th>Posiçao</th>
            <th>Time</th>
            <th>Doações</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Alfa</td>
            <td>3.141</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Beta</td>
            <td>592</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Gama</td>
            <td>65</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Teta</td>
            <td>3</td>
        </tr>
    </table>
)

export default Ranking