import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "./AboutMe.scss"
const ImageAM = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ab-img.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="About Cesar Artezan"
    />
  )
}

export const AboutMe = ({ personalData }) => {
  const URL_PDF =
    "https://drive.google.com/file/d/11dOQFi5IaWR3Xa_OAhgWZBvOaP8WzS1C/view?usp=sharing"
  return (
    <section className="about-me">
      {/* row */}
      <div className="row">
        {/* col */}
        <div className="col-sm-6 flex-box">
          <h2>About me</h2>
          {documentToReactComponents(personalData.description.json)}
          <a
            href={URL_PDF}
            target="_blank"
            className="btn btn-primary btn-pdf"
            role="button"
          >
            Download PDF
          </a>
        </div>
        <div className="col-sm-6">
          <ImageAM />
        </div>
      </div>
    </section>
  )
}
