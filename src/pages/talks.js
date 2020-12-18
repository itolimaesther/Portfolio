import React, { useState } from "react"
import {talkEntry} from "../components/TalkItems"
import MainLayout from "../layouts/MainLayout"


const Talks = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <MainLayout
      id="talks"
      className=" main-content u-padding-left-small u-padding-right-small u-margin-top-medium"
    >
      <div className="talks-header u-center-text text-color-primary w-80">
        <h1>Past Talks</h1>
        <p className="u-margin-bottom-medium"></p>
      </div>

      <div className="container">
        {talkEntry.map((item, index) => {
          return (
            <div className="accordion" onClick={() => toggle(index)} key={index} onKeyDown={toggle} role = "button" tabindex="0">
            <div className="accordion-item" id="question1">
              <button type = "button" className="accordion-link" href="#"  >
                {item.year}
                
                <i className={`fa ${clicked === index ? 'fa-angle-down' : 'fa-angle-right'}`} />
              </button>
              <div className={`answer ${clicked === index && 'open'}`}>
                <p>{ item.title }</p>
                <p>{ item.text }</p>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </MainLayout>
  )
}

export default Talks
