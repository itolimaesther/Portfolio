import React from 'react'; // Import the Component component from React




function Thumbnail({image,technologies,description, link}) {

    const techItems = technologies.map((list) => <li className="technologies-list"> {list} </li>)

    return (
        <div  className="showcase w-80" data-target="showcase">
        <div className="showcase1 row">
            
            <div className="col-6 project-image">
                <img src={image} style={{width: "100%"}} alt="melineo"/>
            </div>
            
            <div className="col-6">
                <div className="col-right">
                <p className="showcase__description project-description">
                    {description}
                </p>
                <ul className="technologies">
                    {techItems}
                </ul>

                <div className="u-margin-top-small">
                    <a className="live" href={`${link}`} target="_blank" rel="noopener noreferrer" >Live</a>
                </div>

                </div>
            </div>
        
        </div>
        
        <hr/>
    </div>
    );
  }



export default Thumbnail;