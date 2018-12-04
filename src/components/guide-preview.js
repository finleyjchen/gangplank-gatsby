import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './guide-preview.module.css'

export default ({ guide }) => (
  <div className={styles.preview}>
    <Link to={`/guides/${guide.slug}`}>
      <div className={styles.previewHeader}>
        <small>{guide.publishDate}</small>
        <small>Last Updated: {guide.lastUpdated}</small>
      </div>
      <div className={styles.previewBody}>
        <h3 className={styles.previewTitle}>
          {guide.title}
        </h3>
        
        <p
          dangerouslySetInnerHTML={{
            __html: guide.description.childMarkdownRemark.html,
          }}
          />
      </div>
    </Link>
  </div>
)
  