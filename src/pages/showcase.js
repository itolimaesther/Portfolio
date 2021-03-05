import React from "react"
import MainLayout from "../layouts/MainLayout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"


const projects = [
  {
    img: 'ava.png',
    id: 1,
    description: "Website for a banking industry.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://www.avacapitalgroup.com/",
  },
  {
    img: 'swank.png',
    id: 2,
    description: "Website for a creative company.",
    technologies: ["HTML", "CSS", "JQuery"],
    link: "http://swank-creations.com/",
  },
  {
    img: 'melineo.png',
    id: 3,
    description:
      "Solar energy app. Calculates the amount of power needed for your appliaances.",
    technologies: ["HTML", "CSS", "React"],
    link: "https://melinoe-solar-calculator.netlify.app/",
  },
  {
    img: 'webflow.png',
    id: 4,
    description: "A clone of github page",
    technologies: ["Webflow"],
    link: "https://esthers-first-project-d00ac9.webflow.io/",
  },
]

const Showcase = () => {
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
              fixed(width: 400) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const { edges: projectImgData } = data.ProjectImgs

  return (
    <MainLayout
      id="showcase"
      className="main-content u-padding-left-small u-padding-right-small"
    >
      <div className="showcase-wrapper">
        <div className="projects-header u-center-text text-color-primary w-80">
          <h1>Selected Projects</h1>
          <p>
            Here is a selection of projects that i have worked on. Most of my
            works can be found on
            <a href="https://github.com/itolimaesther" className="a-link">
              {" "}
              my GitHub account
            </a>
            . I have worked on challenges and personal stuff.
          </p>
        </div>
        {projects.map((project, idx) => {
          const image = projectImgData.find(n => {
            return n.node.relativePath === `projects/${project.img}`
          })
          const imageFixed = image.node.childImageSharp.fixed

          return (
            <div className="showcase w-80" data-target="showcase" key={idx}>
              <div className="showcase1 row">
                <div className="col-6 project-image">
                  <Img
                    fixed={imageFixed}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt="Project Image"
                  />
                </div>

                <div className="col-6">
                  <div className="col-right">
                    <p className="showcase__description project-description">
                      {project.description}
                    </p>
                    <ul className="technologies">
                      {project.technologies.map((list, index) => (
                        <li className="technologies-list" key={index}>
                          {list}
                        </li>
                      ))}
                    </ul>

                    <div className="u-margin-top-small">
                      <a
                        className="live"
                        href={`${project.link}`}
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

          // <Thumbnail
          //   img={data.img}
          //   description={data.description}
          //   technologies={data.technologies}
          //   link={data.link}
          //   key={data.id}
          // />
        })}
      </div>
    </MainLayout>
  )
}

export default Showcase
