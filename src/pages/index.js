import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import FeaturedTours from '../components/Home/FeaturedTours'
import SEO from '../components/SEO'

const Index = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          title="South Amboy GreenGrocer"
          info="lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente id sit ut soluta quam."
        >
          <AniLink fade to="/grocers" className="btn-white">
            online shopping grocers
          </AniLink>
        </Banner>
      </StyledHero>

      <About />
      <Services />
      <FeaturedTours />
    </Layout>
  )
}

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
export default Index
