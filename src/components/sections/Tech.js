import React from "react"
import Img from "gatsby-image"

import { CardComponent } from "../CardComponent"
import "./Tech.scss"

const LogoTech = ({ logo }) => {
  return (
    <div className="logo-circle">
      <Img fluid={logo.fluid} loading="lazy" />
    </div>
  )
}
const Dot = () => {
  return <div className="dot"></div>
}
const nameLevel = level => {
  switch (Math.round(level)) {
    case 5:
      return "High"
    case 4:
      return "High-Medium"
    case 3:
      return "Medium"
    case 2:
      return "Medium - Low"
    case 1:
      return "Low"

    default:
      return "High"
  }
}

export const Tech = ({ techData }) => {
  return (
    <section data-aos="fade-up" className="tech">
      <h2 className="mt-5 text-center mb-5 ">Technologies</h2>
      <div className="row align-self-center justify-content-center">
        {techData.map(({ tech }) => {
          const { name, logo, id, level } = tech
          return (
            <div
              key={id}
              className="col-sm-4 mb-5 align-self-center justify-content-center center-box "
            >
              <CardComponent className="card-tech">
                <div className="align-self-center">
                  <LogoTech logo={logo} />
                </div>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{nameLevel(level)}</p>
                <span className="card-text">
                  {Array(level ? Math.round(level) : 5)
                    .fill(5)
                    .map((item, i) => (
                      <Dot key={i} />
                    ))}
                </span>
              </CardComponent>
            </div>
          )
        })}
      </div>
    </section>
  )
}
