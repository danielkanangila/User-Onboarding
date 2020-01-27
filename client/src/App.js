import React, {useState, useEffect} from 'react';
import { Route, useHistory } from 'react-router-dom';
import './App.css';
import { Container } from './components/ui-components';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import UserProfile from './components/UserProfile';
import { userRoles, stateList } from './data';
import axios from 'axios';
import Cookies from 'js-cookie'
import Logout from './components/Logout';

function App(props) {

  const [user, setUser] = useState({});
  const [isLogged, setIsLogged ] = useState(false);
  const history = useHistory();

  const onRegister = data => {
    axios.post('https://reqres.in/api/users', data)
            .then(res => {
              setUser(res.data);
              setIsLogged(true);
              Cookies.set('myAdmin', res.data);
              history.push('/');
            })
            .catch(err => console.error(err));
  }

  useEffect(() => {
    const user = Cookies.get('myAdmin');
    const hasUser = user !== undefined && Object.entries(user).length !== 0;

    if (hasUser) {
      setIsLogged(true);
      setUser(user);
    } else {
      setIsLogged(false);
      setUser({});
      history.push('/register');
    }

  }, []);

  return (
    <div>
      <AppBar isLogged={isLogged} />
      <Container ___class="app">
        <Route exact path="/register" component={props => <Register onRegister={onRegister} {...props} data={{userRoles, stateList }} />} />
        <Route path="/login" component={props => <Login {...props} />} />
        <Route path="/logout" component={props => <Logout {...props} />} />
        <Route path="/" component={props => <UserProfile {...props} user={user} />} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
