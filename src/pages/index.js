import React from "react"
import WelcomeItems from "../components/WelcomeItems"
import MainLayout from "../layouts/MainLayout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

const Welcome = () => {

  const coverImageData = useStaticQuery(graphql`
  query {
    coverImage: file(relativePath: {eq: "author.png"}) {
      childImageSharp {
        fluid(maxWidth: 600, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`)


  return (
    <MainLayout id="index-page">
      <div className="grid l-grid-height">
        <div className="l-grid-left bg-color l-height-100 d-flex flex-direction">
          <WelcomeItems
            greet = "Hi, I'm Esther."
            stack="Front-End Developer"
            introduction="I create seamless digital products that is mobile-friendly, accessible and with great user-experience."
          />
        </div>
        <div className="l-grid-right">
          <Img fluid={coverImageData.coverImage.childImageSharp.fluid} 
            styles={{objectFit: "cover"}}
            objectPosition="50% 50%"
            alt="Cover Image"
            className="profile-image"
          />
        </div>
      </div>
    </MainLayout>
  )
}

export default Welcome
