import './App.css';
import Header from "./Header"
import Signup from "./Signup"
import Signin from "./Signin"
import Home from "./Home"
import Banner from "./Banner"
import Confirmationcode from "./Confirmationcode"
import Amplify, { Auth } from 'aws-amplify'
import awsconfig from './aws-exports'
// import { withAuthenticator} from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Button } from '@material-ui/core';

Amplify.configure(awsconfig)

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const assessloggedInstate = () => {
    Auth.currentAuthenticatedUser().then(sess => {
      console.log('logged in');
      setLoggedIn(true);
    })
      .catch(() => {
        console.log('not logged in');
        setLoggedIn(false);
      });
  };
  useEffect(() => {
    assessloggedInstate();
  }, []);

  const signOut = async () => {
    try {
      await Auth.signOut();
      setLoggedIn(false);
    } catch (error) {
      console.log('error signing out:', error);
    }
  }

  
  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route exact path="/">
          
        <Header/>
        
        <Banner/>
            <Home/>
          </Route>
          <Route path="/Login">
            <Signin onSignin={assessloggedInstate} />
          </Route>
          <Route path="/Signup">
            <Signup onSignup={assessloggedInstate} />
          </Route>
          <Route path="/Confirmation">
            <Confirmationcode onConfirmationcode={assessloggedInstate}/>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
