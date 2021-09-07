import React from "react"
import Header from "./header"
import Nav from "./nav"
import Footer from "./footer"

const Layout = ({ location, children }) => {
	const rootPath = `${__PATH_PREFIX__}/`
	const isRootPath = location.pathname === rootPath

	return (
		<div className="container" data-is-root-path={isRootPath}>
			<Header />
			<Nav />
			<main className="content">{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
