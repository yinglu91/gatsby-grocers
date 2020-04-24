import React from 'react'
import Image from 'gatsby-image'
import styles from '../../css/tour.module.css'
import { FaMap } from 'react-icons/fa'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

const getImage = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Tour = ({ tour }) => {
  const data = useStaticQuery(getImage)
  const img = data.defaultBcg.childImageSharp.fluid

  const { name, price, country, days, slug, images } = tour

  let mainImage = images ? images[0].fluid : img

  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single tour" />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>

      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <FaMap className={styles.icon} />
            {country || 'default country'}
          </h4>
          <div className={styles.details}>
            <h6>{days} days</h6>
            <h6>from ${price}</h6>
          </div>
        </div>

        {/* https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css */}
        <button
          className="btn-primary snipcart-add-item"
          style={{ fontSize: '0.8rem', padding: '0.2rem 0.3rem' }}
          data-item-id={slug}
          data-item-name={name}
          data-item-price={price}
          data-item-image={mainImage.src}
          data-item-url="http://localhost:8000/tours"
        >
          Add To Cart
        </button>
      </div>
    </article>
  )
}

//name, price, country, days, slug, images
Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    days: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
}
export default Tour
