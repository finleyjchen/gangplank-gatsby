import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'

import styles from './guide-post.module.css'

class GuidePostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulGuide')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <small>Guide by {post.author.name}</small>

          <p
            style={{
              display: 'block',
            }}
          >
            Posted {post.publishDate} (Last updated: {post.lastUpdated})

          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </div>
      </div>
    )
  }
}

export default GuidePostTemplate

export const pageQuery = graphql`
  query GuidePostBySlug($slug: String!) {
    contentfulGuide(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        sizes(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulSizes_tracedSVG
        }
      }
      author {
        name
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
