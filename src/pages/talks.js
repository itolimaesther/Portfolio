import React from "react"
// import {talkEntry} from "../components/TalkItems"
import MainLayout from "../layouts/MainLayout"


const Talks = () => {
  // const [clicked, setClicked] = useState(false);

  // const toggle = index => {
  //   if (clicked === index) {
  //     //if clicked question is already active, then close it
  //     return setClicked(null);
  //   }

  //   setClicked(index);
  // };


  const talkEntry = [

    { 
      title: "Coming soon...", 
      text: "Coming soon..." 
    },

    {
      date: "September, 2019",
      title: "The Imposter feeling",
      meetup: "SSA GDG Summit",
    },

    {
      date: "November, 2019",
      title: "Volunter",
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
        <p className="u-margin-bottom-medium"></p>
      </div>

      <div className="container">
        {talkEntry.map((item, index) => {
          return (
            <div className="accordion" role = "button" tabIndex="0" key={index}>
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
