import React, { useEffect } from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { AboutMe } from "../components/sections/AboutMe"
import { Companies } from "../components/sections/Companies"
import { Education } from "../components/sections/Education"
import { Tech } from "../components/sections/Tech"
import { Contact } from "../components/sections/Contact"
import AOS from "aos"
import 'aos/dist/aos.css';

const IndexPage = () => {
  useEffect(() => {
    console.log('init')
    AOS.init()
  }, [])

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
        allContentfulTechs(sort: { fields: level, order: DESC }) {
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
      <AboutMe personalData={personalData} />
      <Companies description={experienceData.description} jobsData={jobsData} />
      <Education educationData={educationData} />
      <Tech techData={techData} />
      <Contact personalData={personalData} />
    </Layout>
  )
}

export default IndexPage
