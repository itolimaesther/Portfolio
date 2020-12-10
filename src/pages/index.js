import React from "react"
import WelcomeItems from "../components/WelcomeItems"
import MainLayout from "../layouts/MainLayout"

const Welcome = () => {
  return (
    <MainLayout id="index-page">
      <div className="grid l-grid-height">
        <div className="l-grid-left bg-color l-height-100 d-flex flex-direction u-padding">
          <WelcomeItems
            greet = "Hi, I'm Esther."
            stack="Front-End Developer"
            introduction="I'm focused on creating a seamless digital products that is mobile-friendly, accessible and with great user-experience"
          />
        </div>
        <div className="l-grid-right">
          <div className="profile-image" />
        </div>
      </div>
    </MainLayout>
  )
}

export default Welcome
