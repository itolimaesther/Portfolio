import React from 'react';
import './sass/main.scss';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import MainLayout from './layouts/MainLayout.js';
import NotFound from "./pages/404"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

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
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </MainLayout>
    </Router>
  );
} 

export default App;
