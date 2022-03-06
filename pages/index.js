import { Competitions, Navbar } from '../components';
import styles from './index.module.css'

export default function Home({ availableCompetitions, finishedCompetitions }) {
  return (
    <div className={styles.mainDiv}>
      <Navbar />
      <Competitions available={availableCompetitions} finished={finishedCompetitions} />
    </div>
  )
}

export async function getStaticProps() {
  const [availableRes, finishedRes] = await Promise.all([
    fetch(`${process.env.BACKEND_URL}/competitions?available=true`),
    fetch(`${process.env.BACKEND_URL}/competitions?available=false`)
  ]);
  const [availableCompetitions, finishedCompetitions] = await Promise.all([
    availableRes.json(),
    finishedRes.json()
  ]);

  return {
    props: {
      availableCompetitions,
      finishedCompetitions
    }
  }
}