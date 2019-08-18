import React from "react"
import Img from "gatsby-image"
import "./Footer.scss"
import ImageDynamic from "../ImageDynamic"
export const Footer = ({ links }) => {
  return (
    <footer  className="mb-3">
      <div className="flex-footer">

        <div>
          <p>Find me on:</p>
          <div className="flex-box">
            {links.map((item, ii) => (
              <div  key={ii} className="logo-circle mr-2">
                <div >
                  <a href={item.link}>
                    <Img fluid={item.logo.fluid} loading="lazy" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          © {new Date().getFullYear()}, Built with
          <a href="https://www.gatsbyjs.org">
            <div className="img-box2">
              <ImageDynamic filename="gatsby-icon.png" />
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
