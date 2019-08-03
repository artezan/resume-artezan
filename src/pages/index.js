import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"
import { AboutMe } from "../components/sections/AboutMe"
import { Companies } from "../components/sections/Companies"
import { Education } from "../components/sections/Education"
import { Tech } from "../components/sections/Tech"

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
    allContentfulEducation: { edges: educationData },
    allContentfulTechs: { edges: techData },
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
        allContentfulEducation(sort: { fields: startDate, order: DESC }) {
          edges {
            education: node {
              titleProfession
              school
              isCurrent
              endDate(formatString: "YYYY-MM")
              startDate(formatString: "YYYY-MM")
              grade
              id
              description {
                json
              }
            }
          }
        }
        allContentfulTechs (sort: { fields: level, order: DESC }) {
          edges {
            tech: node {
              id
              name
              level
              logo {
                fluid(maxWidth: 150) {
                  ...GatsbyContentfulFluid
                }
                file {
                  url
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Cesar Artezan" />

      {/*  <h2  >{personalData.fullName}</h2>
        <h3>{personalData.ocupation}</h3>
        <p>{personalData.birthdate}</p>
        <p>{personalData.birthplace}</p>
        <p>{personalData.currentCity}</p> */}
      <AboutMe personalData={personalData} />
      <Companies description={experienceData.description} jobsData={jobsData} />
      <Education educationData={educationData} />
      <Tech techData={techData} />

      {/* <img src={jobsData.techs[0].logo.file.url}></img> */}

      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fluid={jobsData.techs[0].logo.fluid} loading="lazy" />
      </div> */}
    </Layout>
  )
}

export default IndexPage
