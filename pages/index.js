import { Competitions, Navbar } from '../components';
import { getCompetitions } from '../utils/api';
import styles from './index.module.css'

export default function Home({competitions}) {
  return (
    <div className={styles.mainDiv}>
      <Navbar />
      <Competitions competitions={competitions} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const competitions = await getCompetitions()
  const data = await competitions.data
  return { props: { competitions: data } }
}
