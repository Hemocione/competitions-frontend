import { Competitions, Navbar } from '../components';
import styles from './index.module.css'

export default function Home() {
  return (
    <div className={styles.mainDiv}>
      <Navbar />
      <Competitions />
    </div>
  )
}
