import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import "./header.scss"
import Parallax from "react-rellax"
import BackgroundSection from './BgImage'

const Header = ({ siteTitle, fullName, ocupation }) => (
  <BackgroundSection className="cover"  >
    <header >
    <div className="container flex-box">
      <div className="col-sm-6 ">
        <div className="mh-header-info ">
          <Parallax speed={-10} >
            <h2>{fullName}</h2>
            <h3>{ocupation}</h3>
          </Parallax>
        </div>
      </div>
      <div className="col-sm-6 rellax" data-rellax-speed="-4">
        <div className="hero-img">
          <div className="img-border">
            <Parallax speed={-10}>
              <Image className="img-fluid" />
            </Parallax>
          </div>
        </div>
      </div>
    </div>
  </header> 
  </BackgroundSection>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
