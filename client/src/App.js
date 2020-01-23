import React, {useState} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Container } from './components/ui-components';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { userRoles, stateList } from './data';

function App() {

  return (
    <div>
      <AppBar />
      <Container ___class="app">
        <Route exact path="/" component={props => <Register {...props} data={ userRoles, stateList } />} />
        <Route path="/login" component={props => <Login {...props} />} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
