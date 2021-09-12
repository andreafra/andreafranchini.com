/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

const Bio = () => {
	return (
		<div className="text">
			<p>
				I’m currently a master’s degree student in Computer Science and
				Engineering at the{" "}
				<a href="//www.polimi.it">Polytechnic University of Milan</a>.
				<br />I got my bachelor's degree in Computer Engineering in 2020.
			</p>
			<p>
				I’ve made a bunch of stuff over the years that is available on {` `}
				<a href="https://github.com/qub3x">GitHub</a>. The projects that are
				good enough to be showcased are briefly described in the project
				section.
			</p>
			<p>Other topics I’m interested about:</p>
			<ul>
				<li>Design</li>
				<li>Videogames</li>
				<li>Open Source</li>
				<li>Privacy & Computer Ethics</li>
				<li>Dungeons & Dragons</li>
			</ul>

			<p>
				If you want to get in touch, I’ll be happy to read your email! Just
				write at:
			</p>
			<span className="email">hello (at) andreafranchini (dot) com</span>
		</div>
	)
}

export default Bio
