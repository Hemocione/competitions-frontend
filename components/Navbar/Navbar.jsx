import React from 'react'
import styles from './Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => (
  <nav className={styles.header}>
    <Link href={process.env.NEXT_PUBLIC_MAIN_FRONTEND_URL} passHref>
      <Image alt='Hemocione' width={300} height={200} className={styles.headerTitle} src='/title.svg' />
    </Link>
    <span className={styles.competitions}>Competições</span>
  </nav>
)

export default Navbar