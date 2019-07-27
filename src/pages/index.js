import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Img from "gatsby-image"

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
    allContentfulJobs: {
      edges: [{ node: jobsData }],
    },
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
        allContentfulJobs(sort: { fields: startDate, order: ASC }) {
          edges {
            node {
              company
              isCurrent
              titlePosition
              country
              startDate(formatString: "YYYY-MM")
              techs {
                logo {
                  fluid(maxWidth: 500) {
                    ...GatsbyContentfulFluid
                  }
                  file {
                    url
                  }
                }
                name
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
      <header>
        <h2  >{personalData.fullName}</h2>
        <h3>{personalData.ocupation}</h3>
        <p>{personalData.birthdate}</p>
        <p>{personalData.birthplace}</p>
        <p>{personalData.currentCity}</p>
        {documentToReactComponents(personalData.description.json)}
      </header>

      <section>
        <h2>Experiencia</h2>
        {documentToReactComponents(experienceData.description.json)}
        <h3>Empresas</h3>
        <p>{jobsData.company}</p>
        {console.log(jobsData)}
        {/* <img src={jobsData.techs[0].logo.file.url}></img> */}
      </section>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        {/* <Image url={jobsData.techs[0].logo.file.url} /> */}
        <Img fluid={jobsData.techs[0].logo.fluid} loading="lazy" />
      </div>
    </Layout>
  )
}

export default IndexPage
