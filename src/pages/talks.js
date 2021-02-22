import React from "react"
import MainLayout from "../layouts/MainLayout"


const Talks = () => {

  const talkEntry = [

    { 
      date: "May, 2018",
      title: "Building a career in Programming and Web Development - How and Why?",
      meetup: "Techcultureng ICT Career fair",
    },

    {
      date: "September, 2019",
      title: "The Imposter feeling",
      meetup: "SSA GDG Summit",
    },

    {
      date: "November, 2019",
      title: "Developing a volunteering habit",
      meetup: "GDG Onitsha Devfest",
    },

    {
      date: "July, 2020",
      title: "The Imposter feeling",
      meetup: "WTM Lagos International Women's Day",
    },
    
  ];


  return (
    <MainLayout
      id="talks"
      className=" main-content u-padding-left-small u-padding-right-small u-margin-top-medium"
    >

      <div className="talks-wrapper">

      <div className="talks-header u-center-text text-color-primary w-80">
        <h1>Past Talks</h1>
        <p className="u-margin-bottom-medium">Want to invite me to speak at your event/meetup. Reach out to me via 
        <strong><a href="mailto:itolimaesther@gmail.com" className="a-link"> email</a></strong> or <strong><a href="https://twitter.com/Ur_melanin_dev" className="a-link">twitter.</a></strong></p>
      </div>

      <div className="container">
        {talkEntry.map((item, index) => {
          return (
            <div className="accordion" data-aos="fade-up" data-aos-duration="3000" role = "button" tabIndex="0" key={index}>
            <div className="accordion-item" id="question1" >

              <h4>{ item.date }</h4>
              <h2>{ item.title }</h2>
              <h4>{ item.meetup }</h4>

            </div>
          </div>
          )
        })}
      </div>

      </div>

    </MainLayout>
  )
}

export default Talks
