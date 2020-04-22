import React, { useState, useEffect } from 'react'
import styles from '../../css/items.module.css'
import Grocer from './Grocer'
import Title from '../Title'

const GrocerList = props => {
  const [state, setState] = useState({
    grocers: [],
    sortedGrocers: [],
  })

  useEffect(() => {
    setState({
      grocers: props.grocers.edges,
      sortedGrocers: props.grocers.edges,
    })
  }, [])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="grocers" />
      <div className={styles.center}>
        {state.sortedGrocers.map(({ node }) => {
          return <Grocer key={node.id} grocer={node} />
        })}
      </div>
    </section>
  )
}

export default GrocerList
