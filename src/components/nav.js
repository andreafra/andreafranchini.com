import React from "react"
import { Link } from "gatsby"

export default function Nav() {
	return (
		<nav className="nav">
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/projects">Projects</Link>
				</li>
				<li>
					<Link to="/blog">Blog</Link>
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
