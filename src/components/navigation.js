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
        <Link to="/blog/">Articles</Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/guides/">Guides</Link>
      </li>
    </ul>
  </nav>
)
