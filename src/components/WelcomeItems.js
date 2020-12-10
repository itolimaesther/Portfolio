import React from "react";

const WelcomeItems = ({greet, stack, introduction}) => {
  return (
    <div className="welcome-content u-margin-top-big">
      <h5 className="greeting u-padding-left u-padding-right u-left-text"> {greet} </h5>
      <h3 className="grid--title u-margin-top-smaller u-padding-left u-padding-right u-center-text">
        {stack}
      </h3>
      <p className="grid-intro u-padding-left-small u-padding-right-small u-center-text">
        {introduction}
      </p>
    </div>
  );
};

export default WelcomeItems;
