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

// Get competitions using SSR
export const getServerSideProps = async () => {
  const competitionsRes = await getCompetitions()
  const competitions = await competitionsRes.data
  return { props: { competitions: competitions } }
}
