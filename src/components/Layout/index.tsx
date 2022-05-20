import { h } from "preact"
import Header from "../Header"
import Footer from "../Footer"
import S from "./styles.module.scss"

export default function Layout({ children }) {
	return (
		<div className={S.container}>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}
