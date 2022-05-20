import { h } from "preact"
import S from "./styles.module.scss"

function Button({ children }) {
	return <span className={S.button}>{children}</span>
}

export default Button
