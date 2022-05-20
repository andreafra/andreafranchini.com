import { h } from "preact"
import S from "./styles.module.scss"

export default function Footer() {
	return (
		<footer className={S.footer}>
			Made by <em>Andrea Franchini</em> in{" "}
			<em>{new Date().getFullYear()}</em>
		</footer>
	)
}
