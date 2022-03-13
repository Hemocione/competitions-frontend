import { Competitions, Navbar } from '../components';
import styles from './index.module.css'

export default function Home({competitions}) {
  return (
    <div className={styles.mainDiv}>
      <Navbar />
      <Competitions competitions={competitions} />
    </div>
  )
}

export async function getServerSideProps() {
  const competitionsRes = await fetch(`https://hemo-competitions-back-dev.herokuapp.com/competitions`)
  const competitions = await competitionsRes.json()

  return { props: { competitions: competitions } }
}