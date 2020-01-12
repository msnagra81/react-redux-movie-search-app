import React from 'react';
import {Provider} from 'react-redux';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/home/Landing';
import {Switch, Route} from 'react-router-dom';

import store from './store/store';
import MovieDetails from './components/MovieDetails';

function App() {
  return (
    <Provider store={store}>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Landing}></Route>
      </Switch>
      <Switch>
        <Route path="/movie/:id" component={MovieDetails}></Route>
      </Switch>
      <Footer/>
    </Provider>
  );
}

export default App;
