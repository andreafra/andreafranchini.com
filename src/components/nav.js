import React from "react"
import { Link } from "gatsby"

export default function Nav({ location }) {
	let path = location.pathname

	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="/" className={path === "/" ? "nav-active" : null}>
						Home
					</Link>
				</li>
				<li>
					<Link
						to="/projects"
						className={path.startsWith("/projects") ? "nav-active" : null}
					>
						Projects
					</Link>
				</li>
				<li>
					<Link
						to="/blog"
						className={path.startsWith("/blog") ? "nav-active" : null}
					>
						Blog
					</Link>
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
	)
}
