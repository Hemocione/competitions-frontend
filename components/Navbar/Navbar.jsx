import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => (
  <nav className={styles.header}>
    <img alt='Hemocione' className={styles.headerTitle} src='/title.svg' />
    <span className={styles.competitions}>Competições</span>
  </nav>
)

export default Navbar