import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
	const post = data.markdownRemark
	const siteTitle = data.site.siteMetadata?.title || `Title`

	return (
		<Layout location={location} title={siteTitle}>
			<Seo
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<article
				className="post"
				itemScope
				itemType="http://schema.org/Article"
			>
				<header className="header">
					<p className="date">Published in {post.frontmatter.date}</p>
					<h1 className="title" itemProp="headline">
						{post.frontmatter.title}
					</h1>
				</header>
				<section
					className="text"
					dangerouslySetInnerHTML={{ __html: post.html }}
					itemProp="articleBody"
				/>
			</article>
		</Layout>
	)
}

export default BlogPostTemplate

export const pageQuery = graphql`
	query BlogPostBySlug($id: String!) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(id: { eq: $id }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "YYYY")
				description
			}
		}
	}
`
