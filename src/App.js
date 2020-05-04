import React from 'react';
// import { Router } from '@reach/router';
// import Header from './elements/Header';
import Home from './components/home';
import { BrowserRouter, Route } from "react-router-dom";
import MovieInfo from './components/movie';
// import NotFound from './elements/NotFound';


const App = () => (
  <BrowserRouter>
    {/* <Header /> */}
    <Route exact path="/" component={Home} />
    <Route exact path="/movie/:movieId" component={MovieInfo} />
  </BrowserRouter>
);

export default App;