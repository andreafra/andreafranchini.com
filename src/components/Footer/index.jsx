import { h } from "preact"
import S from "./styles.module.scss"

export default function Footer() {
	return (
		<footer className={S.footer}>
			<p>
				Made by <em>Andrea Franchini</em> in{" "}
				<em>{new Date().getFullYear()}</em> 🇮🇹 🇪🇺
			</p>
			<p>
				Font pairing is{" "}
				<a
					href="https://fonts.google.com/share?selection.family=Cardo:ital@1%7CManrope:wght@400;700"
					rel="noreferrer noopener"
					className={S.link}
				>
					Manrope + Cardo
				</a>
			</p>
		</footer>
	)
}
