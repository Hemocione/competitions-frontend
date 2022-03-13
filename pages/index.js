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
  const url = new URL('/competitions', process.env.NEXT_PUBLIC_BACKEND_URL)
  const competitionsRes = await fetch(url)
  const competitions = await competitionsRes.json()

  return { props: { competitions: competitions } }
}