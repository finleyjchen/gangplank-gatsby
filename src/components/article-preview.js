import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ article }) => {
  if (!article.lastUpdated) {
    return (
      <div className={styles.preview}>
        <Link to={`/blog/${article.slug}`}>
          <Img alt="" sizes={article.heroImage.sizes} />
          <div className={styles.previewBody}>
            <h3 className={styles.previewTitle}>
              {article.title}
            </h3>
            <small>{article.publishDate}</small>
            <p
              dangerouslySetInnerHTML={{
                __html: article.description.childMarkdownRemark.html,
              }}
            />
            <span className={styles.meta}>
              <span>{article.author.name}</span>
              <span>
                &rarr;
              </span>

            </span>
          </div>
        </Link>
      </div>
    )
  }
  else return (
    <div className={styles.preview}>
      <Link to={`/blog/${article.slug}`}>
        <Img alt="" sizes={article.heroImage.sizes} />
        <div className={styles.previewBody}>
          <h3 className={styles.previewTitle}>
            {article.title}
          </h3>
          <small>{article.publishDate}</small>

          <small>Last Updated: {article.lastUpdated}</small>
          <p
            dangerouslySetInnerHTML={{
              __html: article.description.childMarkdownRemark.html,
            }}
          />
          <span className={styles.meta}>
            <span> <Img className={styles.heroImage} alt={article.author.name} sizes={article.author.image.sizes} />
              {article.author.name}</span>
            <span>
              &rarr;
              </span>

          </span>
        </div>
      </Link>
    </div>
  )
}