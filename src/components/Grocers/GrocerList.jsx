import React, { useState, useEffect } from 'react'
import styles from '../../css/items.module.css'
import Grocer from './Grocer'
import Title from '../Title'

const GrocerList = props => {
  const [grocers, setGrocers] = useState([])
  const [sortedGrocers, setSortedGrocers] = useState([])

  useEffect(() => {
    setGrocers(props.grocers.edges)
    setSortedGrocers(props.grocers.edges)
  }, [])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="grocers" />
      <div className={styles.center}>
        {sortedGrocers.map(({ node }) => {
          return <Grocer key={node.id} grocer={node} />
        })}
      </div>
    </section>
  )
}

export default GrocerList
