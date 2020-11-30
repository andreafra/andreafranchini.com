import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="layout-wrapper" data-is-root-path={isRootPath}>
      <header className="layout-header">
        <h1 className="layout-header--title">
          <Link to="/">{title}</Link>
        </h1>
        <nav className="layout-header--nav">
          <ul>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="//github.com/qub3x">GitHub</Link></li>
            <li><Link to="//www.linkedin.com/in/andreafranchini/">LinkedIn</Link></li>
          </ul>
        </nav>
      </header>
      <main className="layout-content">{children}</main>
      <footer className="layout-footer">
        <div className="layout-footer--copyright">
          © {new Date().getFullYear()}, Andrea Franchini
        </div>
        <div className="layout-footer--tools">
          Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>,
          hosted on
          {` `}
          <a href="https://pages.github.com/">GitHub pages</a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
