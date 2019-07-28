import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import { AboutMe } from "../components/sections/AboutMe"
import { Companies } from "../components/sections/Companies"

/* export const query = graphql`
  query {
    allContentfulExperience {
      edges {
        node {
          description {
            json
          }
        }
      }
    }
  }
` */

const IndexPage = () => {
  const {
    allContentfulPersonalData: {
      edges: [{ node: personalData }],
    },
    allContentfulExperience: {
      edges: [{ node: experienceData }],
    },
    allContentfulJobs: { edges: jobsData },
  } = useStaticQuery(
    graphql`
      query {
        allContentfulPersonalData {
          edges {
            node {
              fullName
              ocupation
              birthplace
              currentCity
              number
              email
              birthdate
              links
              description {
                json
              }
            }
          }
        }
        allContentfulExperience {
          edges {
            node {
              description {
                json
              }
            }
          }
        }
        allContentfulJobs(sort: { fields: startDate, order: DESC }) {
          edges {
            node {
              company
              isCurrent
              titlePosition
              country
              id
              startDate(formatString: "YYYY-MM")
              endDate(formatString: "YYYY-MM")
              logo {
                fluid(maxWidth: 300) {
                  ...GatsbyContentfulFluid
                }
                file {
                  url
                }
              }
              techs {
                logo {
                  fluid(maxWidth: 300) {
                    ...GatsbyContentfulFluid
                  }
                  file {
                    url
                  }
                }
                name
              }
              description {
                json
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />

      {/*  <h2  >{personalData.fullName}</h2>
        <h3>{personalData.ocupation}</h3>
        <p>{personalData.birthdate}</p>
        <p>{personalData.birthplace}</p>
        <p>{personalData.currentCity}</p> */}
      <AboutMe personalData={personalData} />
      <Companies description={experienceData.description} jobsData={jobsData} />

      {/* <img src={jobsData.techs[0].logo.file.url}></img> */}

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={jobsData.techs[0].logo.fluid} loading="lazy" />
      </div> */}
    </Layout>
  )
}

export default IndexPage
