import React, { useEffect } from 'react';
import './sass/main.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import MainLayout from './layouts/MainLayout.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../../node_modules/aos/dist/aos.css'



function App() {
  
  // let AOS;

  // useEffect(() => {
  //   /**
  //    * Server-side rendering does not provide the 'document' object
  //    * therefore this import is required either in useEffect or componentDidMount as they
  //    * are exclusively executed on a client
  //    */
  //   const AOS = require("aos");
  //   AOS.init({
  //     once: true,
  //   });
  // }, []);
  
  
  //   useEffect(() => {
  //     if (AOS) {
  //       AOS.refresh();
  //     }
  //   });
  
  
  
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/showcase">
            <Showcase />
          </Route>
          <Route path="/talks">
            <Talks />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
} 

export default App;
