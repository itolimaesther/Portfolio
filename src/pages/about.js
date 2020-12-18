import React from "react"
import AboutItems from "../components/AboutItems"
import Image1 from "./../images/img1.png"
import MainLayout from "../layouts/MainLayout"

const About = () => {
  return (
    <MainLayout id="about">
      <div className="grid l-grid-height">
        <AboutItems headshot={Image1} />

        <div className="l-grid-right u-padding u-margin-top-medium text-color-primary sm-right-grid">
          <p className="u-justify-text u-text-height">
          Hello! Welcome to my personal space. <br/>
          I’m Esther Itolima, a passionate self-taught <strong>FrontEnd Developer</strong>  base in Lagos, Nigeria.
          Knowing that technology makes life easier, I create web solutions that are mobile-friendly, 
          accessible, easy to use and with great user experience using core web technologies HTML, CSS, 
          JavaScript (framework is React Js) and In addition I’ve worked with Wordpress, Webflow and 
          SquareSpace.
          </p>

          <p className="u-margin-top-smaller u-justify-text u-text-height">
          Am also a <strong>Community Manager and tech Advocate</strong>  that is passionate about tech 
          communities and involving more women in technology and I also speak at 
          tech meetups/conferences.
          </p>

          <p className="u-margin-top-smaller u-justify-text u-text-height">
          Apart from building what people can use, my other passion is dancing, 
          traveling and taking pictures. So whether you're looking for a web developer
           to start a project, a fellow dev looking for a collaboration, or just want to 
           chat, <strong><a href="mailto:itolimaesther@gmail.com" className="a-link">shoot me a message.</a></strong>  I'd love to hear from you.

          </p>
        </div>
      </div>
    </MainLayout>
  )
}

export default About;

