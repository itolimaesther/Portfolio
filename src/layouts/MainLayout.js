import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { Helmet as Head } from "react-helmet"
import SEO from "../components/seo"
import "../sass/main.scss"

import Img from "gatsby-image/withIEPolyfill"

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

  return (
    <main id="main">
      <SEO title="Esther Itolima" />
      <Head>
        <title>
          Esther Itolima - {id[0].toUpperCase()}
          {id.slice(1)}
        </title>
      </Head>

      <div className="App">
        {/* Sidebar */}
        <section id="side-nav" className="l-bg-color is-fixed">
          <header id="header u-center">
            <div className="logo u-center-text u-margin-top-small">
              <Img
                objectFit="cover"
                objectPosition="50% 50%"
                fixed={data.logoGatsbyImage.childImageSharp.fixed}
                className="logo-width"
                alt="logo"
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
                    href="https://twitter.com/Ur_melanin_dev"
                  >
                    <i className="fa fa-twitter icon-bg" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </section>
        {/* Main  Content */}
        {children}

        <noscript>You need javascript in order to browse this webite</noscript>

        {/* Footer */}
        <footer id="footer"></footer>
      </div>
    </main>
  )
}

export default MainLayout
