/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="bio">
      <h2>Bio</h2>
      <p>
        I have a keen interest in Game Design and Development, Software Engineering and Web-related technologies.
      </p>
      <p>I try to create well-polished stuff and really enjoy working in a team.</p>
      <p>
        I have a bachelor’s in Computer Engineering, and I’m currently a
        full-time Computer Science and Engineering master’s degree student at
        {` `}
        <Link to="//polimi.it">Politecnico di Milano</Link>, Italy.
      </p>
      <p>
        Some of my university notes are collected <Link to="https://github.com/qub3x/appunti">here</Link> on GitHub.
      </p>
      <h2>Contacts</h2>
      <p>
        If you want to get in touch, I’ll be happy to read your email! Just
        write at:
      </p>
      <span className="typography-email">
        hello (at) andreafranchini (dot) com
      </span>
    </div>
  )
}

export default Bio
