import React from "react"

export default function Header() {
	return (
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
	)
}
