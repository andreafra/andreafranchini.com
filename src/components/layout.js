import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
	const rootPath = `${__PATH_PREFIX__}/`
	const isRootPath = location.pathname === rootPath

	return (
		<div className="container" data-is-root-path={isRootPath}>
			<header className="info">
				<span className="prefix">I'm</span>
				<h1>Andrea Franchini</h1>
				<ul>
					<li>
						<span className="label">I'm studying at</span>
						<span className="value">Politecnico di Milano</span>
					</li>
					<li>
						<span className="label">I live in</span>
						<span className="value">Milan, Italy</span>
					</li>
					<li>
						<span className="label">I speak</span>
						<span className="value">English, Italian</span>
					</li>
				</ul>
			</header>
			<nav className="nav">
				<ul>
					<li>
						<Link to="/blog">Blog</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<a
							href="//github.com/qub3x"
							rel="noopener noreferrer"
							target="_blank"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href="//www.linkedin.com/in/andreafranchini/"
							rel="noopener noreferrer"
							target="_blank"
						>
							LinkedIn
						</a>
					</li>
				</ul>
			</nav>
			<main className="content">{children}</main>
			<footer className="footer">
				<div className="copyright">
					© {new Date().getFullYear()}, Andrea Franchini
				</div>
				<div className="gpg-key-id">
					<Link to="https://keys.openpgp.org/vks/v1/by-fingerprint/E355067F755EDF63A82B8C38355FC9BA5A61A4EF">
						Download my GPG Public Key
					</Link>
				</div>
				<div className="tools">
					Built with
					{` `}
					<a href="https://www.gatsbyjs.com">Gatsby</a>, hosted on
					{` `}
					<a href="https://pages.github.com/">GitHub pages</a>
				</div>
			</footer>
		</div>
	)
}

export default Layout
