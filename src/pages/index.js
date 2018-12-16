import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import articleImg from '../assets/bilgewater-champs.jpg'
import guideImg from '../assets/gangplank-bald.jpg'
class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPage.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={"Bilgewater.net - Gangplank Mains"} />
        <Hero data={author.node} />
        <div className="wrapper">
          <ul className="article-list">
            <li className="card">
              <Link to="/blog">
                <img alt="articles" src={articleImg} />
                <h2 className="">Articles</h2>
              </Link>
            </li>
            <li className="card">
              <Link to="/guides">
                <img alt="articles" src={guideImg} />
                <h2 className="">Guides</h2>
              </Link>

            </li>
            <li className="card">
              <img alt="articles" src={articleImg} />
              <h2 className="">Videos</h2>

            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          
          heroImage {
            sizes(maxWidth: 600, maxHeight: 300, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_tracedSVG
            }
          }
          author {
            name
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPage(filter: { id: { eq: "c2vlTczTa9aMgyWg8aya8sM" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            sizes(
              maxWidth: 1180

              background: "rgb:000000"
            ) {
              ...GatsbyContentfulSizes_tracedSVG
            }
          }
        }
      }
    }
  }
`
