import React, { useState, useEffect } from 'react'
import styles from '../../css/items.module.css'
import Tour from './Tour'
import Title from '../Title'

const TourList = props => {
  const [state, setState] = useState({
    tours: [],
    sortedTours: [],
  })

  useEffect(() => {
    setState({
      tours: props.tours.edges,
      sortedTours: props.tours.edges,
    })
  }, [])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {state.sortedTours.map(({ node }) => {
          return <Tour key={node.id} tour={node} />
        })}
      </div>
    </section>
  )
}

export default TourList
