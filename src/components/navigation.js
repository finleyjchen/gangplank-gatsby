import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>
      <li className={styles.logo}>
        <Link to="/">gangplank.gg</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/blog/">posts</Link>
      </li>
    </ul>
  </nav>
)
