import React, { useState } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/navbar.module.css'
import { FaAlignRight, FaCartArrowDown } from 'react-icons/fa'
import links from '../constants/links'
import socialIcons from '../constants/social-icons'
import logo from '../images/logo.svg'

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        {/* brand/logo */}
        <div className={styles.navHeader}>
          <AniLink fade to="/">
            <img src={logo} alt="backroads logo" />
          </AniLink>

          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaCartArrowDown
              className={`${styles.cartIcon} snipcart-checkout`}
            />
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>

        {/* internal links use Link component */}
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => (
            <li key={index}>
              <AniLink fade to={item.path} activeStyle={{ color: 'red' }}>
                {item.text}
              </AniLink>
            </li>
          ))}
        </ul>

        {/* external links use a tag */}
        <div className={styles.navSocialLinks}>
          <FaCartArrowDown className={`${styles.cartIcon} snipcart-checkout`} />
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
