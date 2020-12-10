import React from "react"
import Thumbnail from "../components/Thumbnail"
import MainLayout from "../layouts/MainLayout"

import img from "../images/ava.png"
import img2 from "../images/swank.png"
import img3 from "../images/melineo.png"
import img4 from "../images/webflow.png"

const thumbnailData = [
  {
    img: img,
    id: 1,
    description:
      "Website for a banking industry.",
    technologies: [
      'HTML',
      'CSS',
      'JavaScript'
    ],
    link: "https://www.avacapitalgroup.com/",
    
  },
  {
    img: img2,
    id: 2,
    description:
      "Website for a creative company.",
      technologies: [
        'HTML',
        'CSS',
        'JQuery'
      ],
      link: "http://swank-creations.com/",  
  },
  {
    img: img3,
    id: 3,
    description:
      "Solar enery app. Calculates the amount of power needed for your appliaances.",
      technologies: [
        'HTML',
        'CSS',
        'React'
      ],
      link: "https://melinoe-solar-calculator.netlify.app/",
  },
  {
    img: img4,
    id: 4,
    description:
      "3Melineo calculator is a solar calculator that calculates the power you need for your appliances in the house. ",
      technologies: [
        'HTML',
        'CSS',
        'JavaScript'
      ],
    link: "#",
  },
]

const Showcase = () => {
  return (
    <MainLayout
      id="showcase"
      className="main-content u-padding-left-small u-padding-right-small"
    >
      <div className="projects-header u-center-text text-color-primary w-80">
        <h1>Major Projects</h1>
        <p>Here is a selection of projects that i have worked on. Most of my works can be found on my 
          <a href="https://github.com/itolimaesther" className="git-link"> GitHub account</a>.
           I have worked on challenges and personal stuff.</p>
      </div>
      {thumbnailData.map(data => (
        <Thumbnail
          image={data.img}
          description={data.description}
          technologies={data.technologies}
          link={data.link}
          key={data.id}
        />
      ))}
    </MainLayout>
  )
}

export default Showcase
