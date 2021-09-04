import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css'
import Chat from './components/Chat';
import LoginForm from './auth/LoginForm';
import SignupForm from './auth/SignupForm';
import axiosInstance from './services/axiosApi';
import PrivateRoute from './components/PrivateRoute';

export const UserContext = React.createContext(null);

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [successfullyAuthentificated, setSuccessfullyAuthentificated] = useState(false);

  useEffect(() => {
    axiosInstance.get('/users/current_user/').then(json => {
      setUser(json.data);
      setLoggedIn(true);
    }).catch(err => {
      console.log(err);
    })
  }, [successfullyAuthentificated]);
  
  const successfulAuthCallback = () => {
    setSuccessfullyAuthentificated(true);
  }

  const handleLogout = async () => {
    try {
      const response = await axiosInstance.post('users/blacklist/', {
        'refresh_token': localStorage.getItem('refresh_token')
      });
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;
      setLoggedIn(false);
      setUser(null);

      return response;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <UserContext.Provider value={user}>
      <Router>
        <Switch>
          <Route path="/login" render={(props) =>
            <LoginForm
              {...props}
              loggedIn={loggedIn}
              successfulAuthCallback={successfulAuthCallback}
            />}
          />
          <Route path="/signup" render={(props) =>
            <SignupForm
              {...props}
              loggedIn={loggedIn}
              successfulAuthCallback={successfulAuthCallback}
            />}
          />
          <PrivateRoute
            exact
            path="/"
            component={Chat}
            handleLogout={handleLogout}
          />
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}