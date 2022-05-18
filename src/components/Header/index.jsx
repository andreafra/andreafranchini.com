import { h } from "preact"
import Styles from "./styles.module.scss"
import ExternalLinkIcon from "@components/icons/ExternalLinkIcon"

export default function Header() {
	return (
		<header className={Styles.header}>
			<a href="/" className={Styles.title}>
				<h1>Andrea Franchini</h1>
			</a>
			<nav className={Styles.nav}>
				<a
					className={Styles.link}
					href="https://www.linkedin.com/in/andreafranchini/"
				>
					LinkedIn <ExternalLinkIcon />
				</a>
				<a className={Styles.link} href="https://linkedin.com/andreafra">
					GitHub <ExternalLinkIcon />
				</a>
			</nav>
		</header>
	)
}
