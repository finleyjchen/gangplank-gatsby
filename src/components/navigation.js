import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'
import logo from '../assets/bilgewater-logo-smaller.png'
export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.logo}>
        <Link to="/"><img src={logo} alt="logo" /></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">Articles</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/guides/">Guides</Link>
      </li>
    </ul>
  </nav>
)
