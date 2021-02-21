import React from "react"
import Thumbnail from "../components/Thumbnail"
import MainLayout from "../layouts/MainLayout"

// import img from "../images/projects/ava.png"
// import img2 from "../images/projects/swank.png"
// import img3 from "../images/projects/melineo.png"
// import img4 from "../images/projects/webflow.png"

const thumbnailData = [
  {
    
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
    
    id: 3,
    description:
      "Solar energy app. Calculates the amount of power needed for your appliaances.",
      technologies: [
        'HTML',
        'CSS',
        'React'
      ],
      link: "https://melinoe-solar-calculator.netlify.app/",
  },
  {
    
    id: 4,
    description:
      "A clone of github page",
      technologies: [
        'Webflow'
      ],
    link: "https://esthers-first-project-d00ac9.webflow.io/",
  },
]

const Showcase = () => {

 



  return (
    <MainLayout
      id="showcase"
      className="main-content u-padding-left-small u-padding-right-small"
    >
      <div className="showcase-wrapper">
      <div className="projects-header u-center-text text-color-primary w-80">
        <h1>Major Projects</h1>
        <p>Here is a selection of projects that i have worked on. Most of my works can be found on  
          <a href="https://github.com/itolimaesther" className="a-link"> my GitHub account</a>
          . I have worked on challenges and personal stuff.</p>
      </div>
      {thumbnailData.map(data => (
        <Thumbnail
          img={data.img}
          description={data.description}
          technologies={data.technologies}
          link={data.link}
          key={data.id}
        />
      ))}
      </div>
    </MainLayout>
  )
}

export default Showcase
