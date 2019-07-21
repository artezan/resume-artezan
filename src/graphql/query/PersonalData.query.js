import { graphql } from "gatsby";

export const PersonalData =  graphql`
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
}
`