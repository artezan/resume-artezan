/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "../styles/index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allContentfulPersonalData {
        edges {
          node {
            fullName
            ocupation
          }
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={data.site.siteMetadata.title}
        fullName={data.allContentfulPersonalData.edges[0].node.fullName}
        ocupation={data.allContentfulPersonalData.edges[0].node.ocupation}
      />
      <div className="container-body container">
        <main>{children}</main>
        <footer>
          {/*  © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
