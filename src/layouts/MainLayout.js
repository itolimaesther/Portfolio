import React, { useState } from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet as Head } from "react-helmet"
import SEO from "../components/seo"
import "../sass/main.scss"

import Img from "gatsby-image/withIEPolyfill"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faBars } from "@fortawesome/free-solid-svg-icons"
// import { useTransition, animated } from "react-spring"
// import { config } from '@fortawesome/fontawesome-svg-core'

// config.autoAddCss = false

const navList = [
  { nav: "/", label: "welcome" },
  { nav: "/about", label: "about" },
  { nav: "/showcase", label: "showcase" },
  { nav: "/talks", label: "talks" },
]

const onPage = (id, navUrl) => {
  let pageId = id.replace("page", "")
  let route = navUrl.replace("/", "")

  if (route === "") {
    route = "index"
  }

  return pageId === route
}

const MainLayout = ({ children, id }) => {
  const data = useStaticQuery(graphql`
    query {
      logoGatsbyImage: file(relativePath: { eq: "logo.png" }) {
        id
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const Menu = ({ nav, label }) => (
    <li
      className={
        onPage(id, nav) ? "navigation--item is-active" : "navigation--item"
      }
    >
      <Link to={nav}>{label}</Link>
    </li>
  )

  const NavBar = props => (
    <nav id="navigation">
      <ul className="navigation--list u-right-text u-padding">
        {props.children}
      </ul>
    </nav>
  )

  const [showMenu, setShowMenu] = useState(false)
  const handleClick = () => setShowMenu(!showMenu)
  

  return (
    <div className="container-wrapper">
      <SEO title="Esther Itolima" />
      <Head>
        <title>
          Esther Itolima - {id[0].toUpperCase()}
          {id.slice(1)}
        </title>
      </Head>

      <div className="App">

        <div>
        <span className="mobile-menu" onClick={handleClick} role="button" tabIndex={0} onKeyDown={handleClick}>
				<svg xmlns="http://www.w3.org/2000/svg" className="mobile-icon" width="16" height="16">
					<g fill="#ffffff" fill-rule="evenodd">
						<path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" />
					</g>
				</svg>
			</span>
        </div>
        <section
          id="side-nav"
          className={
            showMenu ? "navigation--item is-active" : "navigation--item"
          }
          style={{
            background: "#1a292d",
            height: "100%",
            position: "fixed",
            overflowY: "auto",
          }}
        >
          <header id="header u-center">
            <div className="logo u-center-text u-margin-top-small">
              <Img
                objectFit="cover"
                objectPosition="50% 50%"
                fixed={data.logoGatsbyImage.childImageSharp.fixed}
                className="logo-width"
                alt="logo"
                loading="eager"
                fadeIn="false"
              />
            </div>
          </header>

          <NavBar>
            {navList.map((menuItem, index) => (
              <Menu label={menuItem.label} nav={menuItem.nav} key={index} />
            ))}
          </NavBar>

          <section id="contacts" className="u-center u-padding">
            <div className="contacts-info u-center-text">
              <p className="contact--text">Let's talk</p>
              <p className="contact--email">
                <a href="mailto:itolimaesther@gmail.com">
                  itolimaesther@gmail.com
                </a>
              </p>
            </div>
            <div className="contacts-links u-margin-top-small">
              <ul className="contacts--list d-flex u-center">
                <li className="social--item">
                  <a
                    role="button"
                    aria-label="github"
                    href="https://github.com/itolimaesther"
                  >
                    <i className="fa fa-github icon-bg" />
                  </a>
                </li>
                <li className="social--item">
                  <a
                    role="button"
                    aria-label="linkedin"
                    href="https://www.linkedin.com/in/itolimaesther/"
                  >
                    <i className="fa fa-linkedin icon-bg" />
                  </a>
                </li>
                <li className="social--item">
                  <a
                    role="button"
                    aria-label="twitter"
                    href="https://twitter.com/Qween_Esta"
                  >
                    <i className="fa fa-twitter icon-bg" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </section>
        


        <main id="main">
          {/* Main  Content */}

          {children}
        </main>

        <noscript>You need javascript in order to browse this webite</noscript>

        {/* Footer */}
        <footer id="footer"></footer>
      </div>
    </div>
  )
}

export default MainLayout
