import React from 'react'
import Img from 'gatsby-image'

import styles from './hero.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <Img className={styles.heroImage} alt={data.name} sizes={data.heroImage.sizes} />
    <div className={styles.heroDetails}>
      <h2 className={styles.heroHeadline}>{data.name}</h2>
      <h5>{data.shortBio.shortBio}</h5>
    </div>
  </div>
)
