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
  const res1 = await fetch(process.env.BACKEND_URL + 'competitions?available=true')
  const availableCompetitions = await res1.json()

  const res2 = await fetch(process.env.BACKEND_URL + 'competitions?available=false')
  const finishedCompetitions = await res2.json()

  return {
    props: {
      availableCompetitions,
      finishedCompetitions
    },
  }
}