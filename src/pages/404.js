import React from "react"
import { Link } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import "../sass/main.scss"
import Img from "gatsby-image/withIEPolyfill"

const NotFound = () => {

    const notFoundImageData = useStaticQuery(graphql`
    query {
      notFoundImage: file(relativePath: {eq: "404.png"}) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  

  return (
  
    <div className="not-found-wraper">
      <SEO title="404: Not found" />
      <div className="not-found-page">
        <div className="not-found-page__image">
        <Img fluid={notFoundImageData.notFoundImage.childImageSharp.fluid} 
              styles={{objectFit: "cover"}}
              objectPosition="50% 50%"
              alt="404 Image"
              className="error-image"
            />
        </div>
        <div className="not-found-page__info">
          <h1>404</h1>
          <h3>Um. This is awkward</h3>
          <p>We tried try hard, but couldn't find the page you 
            were looking for.  You may find what you were looking for in the
            <Link to="/"> home page</Link>
          </p>
        </div>
        
      </div>
    </div>
  )

}





export default NotFound