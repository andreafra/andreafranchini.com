import Styles from "./styles.module.scss"
import { h } from "preact"

export default function EntryList({ entries }) {
	return (
		<ul className={Styles.list}>
			{entries.map((entry, index) => (
				<li key={index} className={Styles.item}>
					<a href={entry.url} className={Styles.flex}>
						<div className={Styles.date}>
							{new Date(entry.frontmatter.publishDate).getFullYear()}
						</div>
						<div className={Styles.content}>
							<h3 className={Styles.title}>{entry.frontmatter.title}</h3>
							<p className={Styles.desc}>
								{entry.frontmatter.description}
							</p>
						</div>
					</a>
				</li>
			))}
		</ul>
	)
}
