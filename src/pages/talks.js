import React from "react"
import TalkItems from "../components/TalkItems"
import MainLayout from "../layouts/MainLayout"

const talkEntry = [
  {
    year: "2018",
    title: "Coming soon...",
    text: "Coming soon...",
  },
  {
    year: "2019",
    title: "Coming soon...",
    text: "Coming soon...",
  },
  {
    year: "2020",
    title: "Coming soon...",
    text: "Coming soon...",
  },
]

const Talks = () => {
  return (
    <MainLayout
      id="talks"
      className=" main-content u-padding-left-small u-padding-right-small u-margin-top-medium"
    >
      <div className="talks-header u-center-text text-color-primary w-80">
        <h1>Past Talks</h1>
        <p className="u-margin-bottom-medium">I love sharing my knowlegde with others. Reach out to me via my 
        email address for any speaking opportunity.</p>
      </div>

      <div className="container">
        {talkEntry.map((data, index) => {
          return (
            <TalkItems
              key={index}
              year={data.year}
              title={data.title}
              text={data.text}
            />
          )
        })}
      </div>
    </MainLayout>
  )
}

export default Talks
