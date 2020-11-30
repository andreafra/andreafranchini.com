import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  /** Handle the case without entries */
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="Projects" />
        <p>
          No projects entries found :(
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Projects" />
      <p className="layout-post-preface">
        Here there's a small collection of the most significant project I made. If you want for some twisted reasons see all the crap I coded in these years, take a look at my <Link to="//github.com/qub3x">GitHub page.</Link>
      </p>
      <ul className="layout-posts">
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="layout-post"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header className="layout-post--header">
                  <h2 className="layout-post--title">
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                </header>
                <section>
                  <p
                    className="layout-post--body"
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {fileAbsolutePath: {glob: "**/projects/*/*.md"}}
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "DD MMMM YYYY")
          title
          description
        }
      }
    }
  }
`
