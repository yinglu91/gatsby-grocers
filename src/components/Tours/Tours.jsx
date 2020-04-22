import React from 'react'
import TourList from './TourList'
import { useStaticQuery, graphql } from 'gatsby'

const getTours = graphql`
  query {
    tours: allContentfulTour {
      totalCount
      edges {
        node {
          name
          price
          slug
          country
          id: contentful_id
          days
          images {
            fluid {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Tours = () => {
  const { tours } = useStaticQuery(getTours)

  return <TourList tours={tours} />
}

export default Tours
