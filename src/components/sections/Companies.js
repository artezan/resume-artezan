import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import "./Companies.scss"
import { CardComponent } from "../CardComponent"

const LogoCircle = ({ logo }) => {
  return (
    <div className="logo-circle">
      <Img fluid={logo.fluid} loading="lazy" />
    </div>
  )
}

const Theme = ({ company, logo, isOdd, jobData }) => {
  const {
    endDate,
    country,
    isCurrent,
    startDate,
    techs,
    titlePosition,
    description,
  } = jobData
  return (
    <>
      {/* col1 */}
      <div
        className={`col-sm-9 align-self-center ${
          isOdd ? "order-card" : "order-change-card"
        }`}
      >
        <CardComponent>
          <h5 className="card-title">
            {company} - <span className="title-pos">{titlePosition}</span>{" "}
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {`${startDate} to ${isCurrent ? "Present" : endDate}  `} ( Country:{" "}
            {country})
          </h6>
          <span className="card-text">
            {documentToReactComponents(description.json)}
          </span>

          <p>Tech</p>
          <span className="d-flex">
            {techs.map(({ name, logo }) => (
              <Img
                className="logo-tech  mr-2"
                key={name}
                alt={name}
                fluid={logo.fluid}
                loading="lazy"
              />
            ))}
          </span>
        </CardComponent>
      </div>
      {/* col2 */}
      <div
        className={`col-sm-3 d-flex  align-self-center justify-content-center  ${
          isOdd ? "order-logo" : "order-change-logo"
        }`}
      >
        <LogoCircle logo={logo} />
      </div>
    </>
  )
}
export const Companies = ({ description, jobsData }) => {
  return (
    <section className="companies mt-5">
      <div data-aos="fade-up">
        <CardComponent className="card-des">
          <h2>Skills</h2>
          {documentToReactComponents(description.json)}
        </CardComponent>
      </div>

      <div data-aos="fade-up">
        <h2 className="mt-4 text-center">Companies</h2>
        {jobsData.map((item, index) => {
          const { company, id, logo, ...rest } = item.node

          return (
            <div
              key={id}
              data-aos={!!(index % 2) ? `fade-left` : `fade-right`}
              className="row mt-5 mb-3"
            >
              <Theme
                company={company}
                logo={logo}
                isOdd={!!(index % 2)}
                jobData={rest}
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
