import React, { useState, useEffect } from 'react'
import styles from '../../css/items1.module.css'
import Grocer from './Grocer'
import Title from '../Title'
import { FaSearch } from 'react-icons/fa'

const GrocerList = props => {
  const [grocers, setGrocers] = useState([])
  const [sortedGrocers, setSortedGrocers] = useState([])
  const [categories, setCategories] = useState([])

  const getCategories = items => {
    let tempItems = items.map(item => item.node.category)

    // rm duplicate item and sort them
    let tempCategories = new Set(tempItems)
    let categories1 = Array.from(tempCategories)
    categories1.sort()

    categories1 = ['all', ...categories1]

    return categories1
  }

  useEffect(() => {
    setGrocers(props.grocers.edges)
    setSortedGrocers(props.grocers.edges)

    setCategories(getCategories(props.grocers.edges))
  }, [])

  const handleItem = category => {
    const tempItems = [...grocers]
    if (category === 'all') {
      setSortedGrocers(tempItems)
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      setSortedGrocers(items)
    }
  }
  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="grocers" />
      {/* cateory */}

      <div className={styles.center1}>
        {categories.map(item => (
          <button
            className="btn-primary"
            style={{ width: 160, background: 'green' }}
            onClick={() => handleItem(item)}
          >
            {item}
          </button>
        ))}
        {/* <FaSearch className={styles.icon} /> */}
      </div>

      <div className={styles.center}>
        {sortedGrocers.map(({ node }) => {
          return <Grocer key={node.id} grocer={node} />
        })}
      </div>
    </section>
  )
}

export default GrocerList
