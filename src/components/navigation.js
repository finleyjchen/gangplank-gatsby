import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import logo from '../assets/bilgewater-logo-smaller.png'
export default () => (
  <nav role="navigation" className={styles.navigation}>
    <span className={styles.logo}>
      <Link to="/"><img src={logo} alt="logo" /></Link>
    </span>
    <ul className={styles.navigationItems}>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Articles</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/guides/">Guides</Link>
      </li>
    </ul>
  </nav>
)
