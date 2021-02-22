import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import { node } from 'prop-types';

function Thumbnail({ img, technologies, description, link }) {
  const data = useStaticQuery(graphql`
    query {
      ProjectImgs: allFile(
        filter: { relativePath: { regex: "images/projects.*.png/" } }
        sort: { order: ASC, fields: absolutePath }
      ) {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 320) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)


  const image = data.ProjectImgs.edges.map(n => {
    console.log(n.node.childImageSharp.fixed)
    return n.node.childImageSharp.fixed
  })

  const techItems = technologies.map((list, index) => (
    <li className="technologies-list" key={index}>
      {" "}
      {list}{" "}
    </li>
  ))

  return (
    <div className="showcase w-80" data-target="showcase">
      <div className="showcase1 row">
        <div className="col-6 project-image">
          
              <Img
                fixed={image}
                style={{ width: "100%" }}
                alt="Project Images"
              />
        </div>

        <div className="col-6">
          <div className="col-right">
            <p className="showcase__description project-description">
              {description}
            </p>
            <ul className="technologies">{techItems}</ul>

            <div className="u-margin-top-small">
              <a
                className="live"
                href={`${link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Thumbnail
