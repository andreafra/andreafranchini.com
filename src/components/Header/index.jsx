import { h } from "preact"
import S from "./styles.module.scss"
import ExternalLinkIcon from "@components/icons/ExternalLinkIcon"

export default function Header() {
	return (
		<header className={S.header}>
			<a href="/" className={S.title}>
				<h1>Andrea Franchini</h1>
			</a>
			<nav className={S.nav}>
				<a
					className={S.link}
					href="https://www.linkedin.com/in/andreafranchini/"
				>
					LinkedIn
				</a>
				<a className={S.link} href="https://linkedin.com/andreafra">
					GitHub
				</a>
			</nav>
		</header>
	)
}
