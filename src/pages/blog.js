import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata?.title || `Title`
	const posts = data.allMarkdownRemark.nodes

	/** Handle the case without entries */
	if (posts.length === 0) {
		return (
			<Layout location={location} title={siteTitle}>
				<Seo title="Blog" />
				<p>No blog posts found :(</p>
			</Layout>
		)
	}

	return (
		<Layout location={location} title={siteTitle}>
			<Seo title="Blog" />
			<ul className="posts">
				{posts.map((post) => {
					const title = post.frontmatter.title || post.fields.slug

					return (
						<li key={post.fields.slug}>
							<article
								className="post-item"
								itemScope
								itemType="http://schema.org/Article"
							>
								<header>
									<p className="date">{post.frontmatter.date}</p>
									<h2 className="title">
										<Link to={post.fields.slug} itemProp="url">
											<span itemProp="headline">{title}</span>
										</Link>
									</h2>
								</header>
								<section>
									<p
										className="body"
										dangerouslySetInnerHTML={{
											__html:
												post.frontmatter.description ||
												post.excerpt,
										}}
										itemProp="description"
									/>
								</section>
								<Link to={post.fields.slug} itemProp="url">
									<span className="button" itemProp="button">
										Read more
									</span>
								</Link>
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
			filter: { fileAbsolutePath: { glob: "**/blog/*/*.md" } }
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