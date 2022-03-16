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

export const getStaticProps = async () => {
  const url = new URL('/competitions', process.env.PRIVATE_BACKEND_URL);
  const headers = new Headers({
    'Content-Type': 'application/json'
  })
  const competitionsRes = await fetch(url, {
    method: 'GET',
    headers: headers
  })
  const competitions = await competitionsRes.json()
  return { props: { competitions: competitions }, revalidate: 300 }
}
