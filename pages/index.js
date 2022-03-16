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

export const getServerSideProps = async () => {
  try {
    const url = new URL('/competitions', process.env.NEXT_PUBLIC_BACKEND_URL);
    const competitionsRes = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const competitions = await competitionsRes.json()
    return { props: { competitions: competitions } }
  } catch(err) {
    console.log(err)
    return { props: { competitions: [] } }
  }
}