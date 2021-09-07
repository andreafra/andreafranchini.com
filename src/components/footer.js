import React from "react"

export default function Footer() {
	return (
		<footer className="footer">
			<div className="copyright">
				© {new Date().getFullYear()}, Andrea Franchini
			</div>
			<div className="gpg-key-id">
				<a href="https://keys.openpgp.org/vks/v1/by-fingerprint/E355067F755EDF63A82B8C38355FC9BA5A61A4EF">
					Download my GPG Public Key
				</a>
			</div>
			<div className="tools">
				Built with
				{` `}
				<a href="https://www.gatsbyjs.com">Gatsby</a>, hosted on
				{` `}
				<a href="https://pages.github.com/">GitHub pages</a>
			</div>
		</footer>
	)
}
